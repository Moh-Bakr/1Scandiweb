<?php

namespace Modules\Product\Http\Controllers;

use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Validator;
use Modules\Product\Entities\Product;
use Modules\Product\Entities\Type;
use Modules\Product\Http\Requests\StoreProductRequest;
use Modules\Product\Traits\ApiResponse;

class ProductController extends Controller
{
    use ApiResponse;

    public function index()
    {
        $products = Product::with('type')->get()->toArray();

        // Remove null fields
        $products = array_map(function ($product) {
            return array_filter($product, function ($value) {
                return !is_null($value);
            });
        }, $products);

        return $this->successResponse('Products retrieved successfully', $products, Response::HTTP_OK);
    }


    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'price' => 'required|numeric',
            'sku' => 'required|string|unique:products',
            'type_id' => 'required|exists:types,id',
            'size' => 'numeric|nullable',
            'weight' => 'numeric|nullable',
            'width' => 'numeric|nullable',
            'height' => 'numeric|nullable',
            'length' => 'numeric|nullable'
        ]);

        if ($validator->fails()) {
            return $this->errorResponse($validator->errors()->all(), Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        $type = Type::findOrFail($request->input('type_id'));

        $productAttributes = $request->only(['name', 'price', 'sku']);
        $productAttributes['type_id'] = $type->id;

        $requiredAttributes = [
            'DVD' => ['size'],
            'Book' => ['weight'],
            'Furniture' => ['width', 'height', 'length']
        ];

        $missingAttributes = array_diff($requiredAttributes[$type->name], array_keys($request->only($requiredAttributes[$type->name])));

        if (!empty($missingAttributes)) {
            $missingFields = implode(', ', $missingAttributes);
            $errorMessage = "The following fields are required for this type: {$missingFields}.";
            return $this->errorResponse([$errorMessage], Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        $productAttributes = array_merge($productAttributes, $request->only($requiredAttributes[$type->name]));
        $product = Product::create($productAttributes);

        return $this->successResponse('Product created successfully', $product, Response::HTTP_CREATED);
    }

    public function destroy($ids)
    {
        $ids = explode(",", $ids);
        $count = count($ids);

        $validator = Validator::make(['count' => $count], [
            'count' => 'max:10'
        ]);

        if ($validator->fails()) {
            return $this->errorResponse(['You can only delete a maximum of 10 products at a time.'], Response::HTTP_BAD_REQUEST);
        }

//        $products = Product::whereIn('id', $ids)->get();
//
//        if ($products->isEmpty()) {
//            return $this->errorResponse(['Product not found'], Response::HTTP_NOT_FOUND);
//        }
//
//        Product::whereIn('id', $ids)->delete();

        Product::whereIn('id', $ids)->get()->tap(function ($collection) {
            if ($collection->isEmpty()) {
                throw new HttpResponseException($this->errorResponse(['Product not found'], Response::HTTP_NOT_FOUND));
            }
        })->each->delete();

        return $this->successResponse('Products deleted successfully', [], Response::HTTP_OK);
    }
}

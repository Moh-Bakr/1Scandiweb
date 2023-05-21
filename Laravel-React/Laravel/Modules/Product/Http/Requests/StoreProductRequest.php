<?php

namespace Modules\Product\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreProductRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|string',
            'sku' => 'required|string|unique:products',
            'type_id' => 'required|exists:types,id',
            'price' => 'required|numeric',
            'size' => 'numeric|nullable',
            'weight' => 'numeric|nullable',
            'height' => 'numeric|nullable',
            'width' => 'numeric|nullable',
            'length' => 'numeric|nullable',
        ];
    }

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }
}

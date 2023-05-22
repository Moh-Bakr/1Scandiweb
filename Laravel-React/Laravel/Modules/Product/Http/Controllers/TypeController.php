<?php

namespace Modules\Product\Http\Controllers;

use Illuminate\Routing\Controller;
use Modules\Product\Entities\Type;
use Modules\Product\Traits\ApiResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class TypeController extends Controller
{
    use ApiResponse;

    public function index()
    {
        $types = Type::orderBy('id')->get();
        return response()->json(['message' => 'Types retrieved successfully', 'data' => $types], Response::HTTP_OK);
    }
}

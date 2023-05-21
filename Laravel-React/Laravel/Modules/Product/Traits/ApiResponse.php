<?php

namespace Modules\Product\Traits;

trait ApiResponse
{
    protected function successResponse($message, $data, $code)
    {
        return response([
            'status' => 'success',
            'message' => $message,
            'data' => $data,
        ], $code);
    }

    protected function errorResponse($message, $code)
    {
        return response([
            'status' => 'failed',
            'errors' => $message,
        ], $code);
    }
}

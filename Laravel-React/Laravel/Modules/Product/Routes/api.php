<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Modules\Product\Http\Controllers\TypeController;
use Modules\Product\Http\Controllers\ProductController;

Route::resource('products', ProductController::class);

Route::get('types', [TypeController::class, 'index']);

<?php
require_once(__DIR__ . '/../Models/Logic/ProductRequest.php');

class ProductController extends ProductRequest
{
    public static function Index()
    {
        $products = parent::GetProducts();

        $request = Self::DeleteProduct();
        require_once(__DIR__ . '/../Views/pages/product-list.php');
    }

    public static function CreateProduct()
    {
        require_once(__DIR__ . '/../Views/pages/add-product.php');
    }

    public static function DeleteProduct()
    {
        ProductRequest::DeleteProducts();
    }

}
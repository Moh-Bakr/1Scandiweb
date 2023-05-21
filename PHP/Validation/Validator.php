<?php
require_once(__DIR__ . '/../Models/Connection/database.php');
require_once(__DIR__ . '/../Models/logic/ProductRequest.php');
require_once(__DIR__ . '/ProductTypes/DVD.php');
require_once(__DIR__ . '/ProductTypes/Book.php');
require_once(__DIR__ . '/ProductTypes/Furniture.php');
require_once(__DIR__ . '/Rules.php');

class validator extends ProductRequest
{
    public $data;
    public $Rules;

    public function __construct($post_data)
    {
        $this->data = $post_data;
        $this->Rules = new Rules();
    }

    public function validateform()
    {
        $this->ValidateSku();
        $this->ValidateName();
        $this->ValidatePrice();
        $this->ProductType();

        if (empty($this->Rules->errors)) {
            parent::__construct($this->data);
            parent::CreateProducts();
            header('Location: ' . '/');
        }
        return $this->Rules->errors;

    }

    private function ValidateSku()
    {
        $val = trim($this->data['sku']);
        $rule = '/^[a-zA-Z0-9_-]+$/';
        $this->Rules->ValidateUnique($val, "sku", $rule);

    }

    private function ValidateName()
    {
        $val = trim($this->data['name']);
        $rule = '/^[a-zA-Z0-9_ -]+$/';
        $this->Rules->ValidateString($val, "name", $rule);
    }

    private function ValidatePrice()
    {
        $val = trim($this->data['price']);
        $this->Rules->ValidateProduct($val, 'price');

    }

    private function ProductType()
    {
        $val = trim($this->data['type']);
        $size = trim($this->data['size']);
        $weight = trim($this->data['weight']);
        $length = trim($this->data['length']);
        $height = trim($this->data['height']);
        $width = trim($this->data['width']);

        $productValidation = [
            'DVD' => function () use ($size) {
                $dvd = new DVD($size);
                $dvd->validate_size();
            },
            'Book' => function () use ($weight) {
                $book = new Book($weight);
                $book->validate_weight();
            },
            'Furniture' => function () use ($length, $height, $width) {
                $furniture = new Furniture($length, $height, $width);
                $furniture->validate_HWL();
            }
        ];

        $productValidation[$val]();
    }

}
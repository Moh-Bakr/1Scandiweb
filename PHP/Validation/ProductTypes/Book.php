<?php
require_once(__DIR__ . '/../../Models/Logic/ProductRequest.php');
require_once(__DIR__ . '/../Rules.php');

class Book extends ProductRequest
{
    public $weight, $Validate;

    public function __construct($weight)
    {
        $this->weight = $weight ?? NULL;
        $this->validate_weight();
    }

    public function validate_weight()
    {
        $this->Validate = new Rules();
        $this->Validate->ValidateProduct($this->weight, 'weight');
    }
}
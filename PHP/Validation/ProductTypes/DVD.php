<?php
require_once(__DIR__ . '/../Logic/ProductRequest.php');
require_once(__DIR__ . '/../../Validation/Rules.php');

class DVD extends ProductRequest
{
    public $size, $Validate;

    public function __construct($size)
    {
        $this->size = $size ?? NULL;
        $this->validate_size();
    }

    public function validate_size()
    {
        $this->Validate = new Rules();
        $this->Validate->ValidateProduct($this->size, 'size');
    }
}
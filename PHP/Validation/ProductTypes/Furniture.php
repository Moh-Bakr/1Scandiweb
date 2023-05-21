<?php

namespace ProductTypes;

use ProductRequest;
use Rules;

require_once(__DIR__ . '/../Logic/ProductRequest.php');
require_once(__DIR__ . '/../../Validation/Rules.php');

class Furniture extends ProductRequest
{
    public $height, $width, $length, $Validate;

    public function __construct($height, $width, $length)
    {
        $this->height = $height ?? NULL;
        $this->width = $width ?? NULL;
        $this->length = $length ?? NULL;
        $this->validate_HWL();
    }

    public function validate_HWL()
    {
        $this->Validate = new Rules();

        $Furniture = ["height" => $this->height, "width" => $this->width, "length" => $this->length];
        foreach ($Furniture as $key => $key_value) {
            $this->Validate->ValidateProduct($key, $key_value);
        }

    }
}
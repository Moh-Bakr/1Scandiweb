<?php
require_once(__DIR__ . '/../../Validation/Validator.php');
if (isset($_POST['submit'])) {
    $validator = new validator($_POST);
    $errors = $validator->validateform();
}
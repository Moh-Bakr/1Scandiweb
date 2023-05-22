import React, { useState } from "react";
import axios from "axios";
import Nav from "../components/Layout/Navbar.jsx";
import InputField from "../components/Inputs/InputField.jsx";
import { useNavigate } from "react-router-dom";
import BaseCTA from "../components/Buttons/BaseCTA.jsx";
import MainMessage from "../components/Messages/MainMessage.jsx";
import { validateProductFields } from "../Apis/Product/AddProductApi.jsx";

function AddProduct() {
  let typeCode = {
    dvd: "1",
    book: "2",
    furniture: "3",
  };

  const [productType, setProductType] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [successMessages, setSuccessMessages] = useState([]);
  const [errorMessages, setErrorMessages] = useState([]);
  const navigate = useNavigate();
  const [productFields, setProductFields] = useState({
    sku: "",
    name: "",
    price: "",
    width: "",
    height: "",
    length: "",
    weight: "",
    size: "",
  });

  const handleProductTypeChange = (event) => {
    setErrors({});
    const selectedType = event.target.value;
    setProductType(selectedType);
    setProductFields({
      ...productFields,
      width: "",
      height: "",
      length: "",
      weight: "",
      size: "",
    });
  };

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setProductFields({ ...productFields, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSave = () => {
    validateProductFields(
      productFields,
      productType,
      typeCode,
      setErrors,
      navigate,
      setSuccessMessages,
      setErrorMessages,
      setIsSubmitted
    );
  };
  const cancelHandler = () => {
    setProductType("");
    setProductFields({
      sku: "",
      name: "",
      price: "",
      width: "",
      height: "",
      length: "",
      weight: "",
      size: "",
    });
    setErrors({});
    navigate("/");
  };
  const clearErrors = () => {
    setErrors([]);
  };
  const clearSuccessMessages = () => {
    setSuccessMessages([]);
    setIsSubmitted(false);
  };

  return (
    <div>
      <Nav title="Add Product">
        <div className="flex gap-4">
          <BaseCTA
            onClick={handleSave}
            text="Save"
            background={"ring-green-800"}
          />
          <BaseCTA
            onClick={cancelHandler}
            text="Cancel"
            background={"ring-red-700"}
          />
        </div>
      </Nav>

      <form className="mt-4 p-10">
        <InputField
          label="SKU"
          labelError="sku"
          handleFieldChange={handleFieldChange}
          errors={errors}
        />
        <InputField
          label="Name"
          labelError="name"
          handleFieldChange={handleFieldChange}
          errors={errors}
        />
        <InputField
          label="Price ($)"
          labelError="price"
          handleFieldChange={handleFieldChange}
          errors={errors}
          type={"number"}
        />
        <div className="mb-4">
          <label
            className="mb-2 inline-block w-40 font-bold"
            htmlFor="productType"
          >
            Type Switcher:
          </label>
          <select
            id="productType"
            className="focus:shadow-outline inline-block w-64 rounded border border-gray-400 py-2 px-3 leading-tight focus:outline-none"
            value={productType}
            onChange={handleProductTypeChange}
            required
          >
            <option value="" hidden>
              Select a product type
            </option>
            <option value="furniture">Furniture</option>
            <option value="book">Book</option>
            <option value="dvd">DVD</option>
          </select>
        </div>
        {productType === "furniture" && (
          <>
            <InputField
              label="Width"
              labelError="width"
              type={"number"}
              handleFieldChange={handleFieldChange}
              errors={errors}
            />
            <InputField
              label="Height"
              labelError="height"
              type={"number"}
              handleFieldChange={handleFieldChange}
              errors={errors}
            />
            <InputField
              label="Length"
              labelError="length"
              type={"number"}
              handleFieldChange={handleFieldChange}
              errors={errors}
            />
          </>
        )}
        {productType === "book" && (
          <div className="mb-4">
            <InputField
              label="Weight"
              labelError="weight"
              type={"number"}
              handleFieldChange={handleFieldChange}
              errors={errors}
            />
          </div>
        )}
        {productType === "dvd" && (
          <div className="mb-4">
            <InputField
              label="Size"
              labelError="size"
              type={"number"}
              handleFieldChange={handleFieldChange}
              errors={errors}
            />
          </div>
        )}
      </form>
      {errorMessages.length > 0 && (
        <MainMessage
          messages={errorMessages}
          clearMessages={clearErrors}
          progressBarBg={"bg-red-600"}
          progressBarSliderBg={"bg-red-700"}
          modelBg={"bg-gray-800"}
          modelBorderColor={"border-red-900"}
          iconColor={"text-red-700"}
          textColor={"text-red-500"}
          icon={"M6 18L18 6M6 6l12 12"}
        />
      )}
      {isSubmitted && (
        <MainMessage
          messages={successMessages}
          clearMessages={clearSuccessMessages}
          progressBarBg={"bg-green-600"}
          progressBarSliderBg={"bg-green-700"}
          modelBg={"bg-gray-800"}
          modelBorderColor={"border-green-900"}
          iconColor={"text-green-500"}
          textColor={"text-green-600"}
          icon={"M5 13l4 4L19 7"}
        />
      )}
    </div>
  );
}

export default AddProduct;

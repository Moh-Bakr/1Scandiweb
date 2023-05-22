import axios from "axios";

export const validateProductFields = (
  productFields,
  productType,
  typeCode,
  setErrors,
  navigate,
  setSuccessMessages,
  setErrorMessages,
  setIsSubmitted
) => {
  const validationErrors = {};
  const requiredFields = ["sku", "name", "price"];
  const productTypeFields = {
    dvd: ["size"],
    book: ["weight"],
    furniture: ["width", "height", "length"],
  };
  const numericFields = {
    price: true,
    width: true,
    height: true,
    length: true,
    weight: true,
    size: true,
  };

  requiredFields.forEach((field) => {
    if (!productFields[field]) validationErrors[field] = `${field} is required`;
  });

  Object.entries(productFields).forEach(([key, value]) => {
    if (numericFields[key] && isNaN(value)) {
      validationErrors[key] = `${key} must be a number`;
    }
  });

  (productTypeFields[productType] || []).forEach((field) => {
    if (!productFields[field]) {
      validationErrors[field] = `${field} is required`;
    }
  });

  setErrors(validationErrors);

  if (Object.keys(validationErrors).length === 0) {
    axios
      .post(`${import.meta.env.VITE_API_URL}/api/products`, {
        type_id: typeCode[productType],
        ...productFields,
      })
      .then(() => {
        setSuccessMessages(["Product added successfully"]);
        setIsSubmitted(true);

        setTimeout(() => {
          navigate("/");
        }, 3000);
      })
      .catch((error) => {
        setErrorMessages(error.response.data.errors);
      });
  }
};

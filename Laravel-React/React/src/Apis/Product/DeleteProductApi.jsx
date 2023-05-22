import axios from "axios";

export const deleteProducts = (
  selectedProducts,
  setSuccessMessages,
  setIsSubmitted,
  setSelectedProducts,
  setErrorMessages
) => {
  if (selectedProducts.length === 0) {
    setErrorMessages(["Please select at least one product to delete."]);
    return;
  }

  let data = selectedProducts.join(",");
  axios
    .delete(`${import.meta.env.VITE_API_URL}/api/products/${data}`)
    .then((response) => {
      setSuccessMessages(["Products deleted successfully."]);
      setIsSubmitted(true);
      setSelectedProducts([]);
    })
    .catch((error) => {
      setErrorMessages(["Something went wrong, please try again later."]);
    });
};

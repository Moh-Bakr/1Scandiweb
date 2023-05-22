import axios from "axios";

export const getProducts = ({
  setProducts,
  setErrorMessages,
  setIsLoading,
}) => {
  axios
    .get(`${import.meta.env.VITE_API_URL}/api/products`)
    .then((response) => {
      setProducts(response.data.data);
    })
    .catch((error) => {
      setErrorMessages(["Something went wrong, please try again later."]);
    })
    .finally(() => {
      setIsLoading(false);
    });
};

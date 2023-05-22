import React, { useState, useEffect } from "react";
import Nav from "../components/Layout/Navbar.jsx";
import { useNavigate } from "react-router-dom";
import ProductVariantInfo from "../components/Product/ProductVariantInfo.jsx";
import ProductsLoadingIndicator from "../components/Product/ProductsLoadingIndicator.jsx";
import NoProductsFound from "../components/Product/NoProductsFound.jsx";
import BaseCTA from "../components/Buttons/BaseCTA.jsx";
import MainMessage from "../components/Messages/MainMessage.jsx";
import { deleteProducts } from "../Apis/Product/DeleteProductApi.jsx";
import axios from "axios";

const productList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [errorMessages, setErrorMessages] = useState([]);
  const [successMessages, setSuccessMessages] = useState([]);
  const navigate = useNavigate();

  const handleAddClick = () => {
    navigate("/addproduct");
  };

  const handleMassDeleteClick = () => {
    deleteProducts(
      selectedProducts,
      setSuccessMessages,
      setIsSubmitted,
      setSelectedProducts,
      getProducts,
      setErrorMessages
    );
  };

  const handleCheckboxChange = (event, productId) => {
    if (event.target.checked === true) {
      setSelectedProducts([productId, ...selectedProducts]);
    } else {
      setSelectedProducts(selectedProducts.filter((id) => id !== productId));
    }
  };

  useEffect(() => {
    setIsLoading(true);
    getProducts();
  }, [productList]);

  const getProducts = () => {
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
  const clearErrors = () => {
    setErrorMessages([]);
  };
  const clearSuccessMessages = () => {
    setSuccessMessages([]);
    setIsSubmitted(false);
  };

  return (
    <div className="flex flex-col items-start">
      <Nav title="Product List">
        <div className="flex justify-end gap-4">
          <BaseCTA
            onClick={handleAddClick}
            text="Add"
            background={"ring-blue-800"}
          />
          <BaseCTA
            onClick={handleMassDeleteClick}
            text="Mass Delete"
            background={"ring-red-700"}
          />
        </div>
      </Nav>

      <div className="w-full p-2.5">
        {products.length > 0 && (
          <div
            className="grid h-full w-full gap-20 rounded p-6 md:grid-cols-2
             lg:grid-cols-4"
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="h-64 rounded-[20px] border bg-white p-2 shadow-xl transition-all duration-300 hover:scale-105 hover:cursor-pointer"
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedProducts.includes(product.id)}
                    onChange={(event) =>
                      handleCheckboxChange(event, product.id)
                    }
                    className="form-checkbox m-5 mb-0 h-5 w-5 cursor-pointer text-green-500"
                  />
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

                <div className="mx-auto flex h-[80%] w-64 flex-col items-center justify-center px-4 pb-8 pt-0 text-gray-700">
                  <div> {product.sku}</div>
                  <div>{product.name}</div>
                  <div>{product.price} $</div>
                  <ProductVariantInfo product={product} />
                </div>
              </div>
            ))}
          </div>
        )}
        {isLoading && <ProductsLoadingIndicator />}
        {products.length === 0 && !isLoading && <NoProductsFound />}
      </div>
    </div>
  );
};

export default productList;

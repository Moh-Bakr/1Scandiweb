import React from "react";
import AddProduct from "./Pages/addProduct.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route path="/addproduct" element={<AddProduct />} />
        </Routes>
      </>
    </div>
  );
}

export default App;

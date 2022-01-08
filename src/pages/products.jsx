import React from "react";

import MerchantsDropdown from "../components/merchantsDropdown";

const Products = () => {
  const handleNumberChange = () => {
    console.log("products.handleNumberChange.");
  };

  return <MerchantsDropdown handleNumberChange={handleNumberChange} />;
};

export default Products;

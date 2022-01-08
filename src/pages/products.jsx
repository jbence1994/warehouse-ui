import React from "react";

import MerchantsDropdown from "../components/merchantsDropdown";

const Products = () => {
  const handleNumberChange = () => {
    console.log("Clicked...");
  };

  return <MerchantsDropdown handleNumberChange={handleNumberChange} />;
};

export default Products;

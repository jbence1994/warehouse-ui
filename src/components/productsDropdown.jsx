import React, { useEffect, useState } from "react";

import Dropdown from "../components/common/dropdown";

import { getProductKeyValuePairs } from "../services/productService";

const ProductsDropdown = ({ onChange }) => {
  const [productKeyValuePairs, setProductKeyValuePairs] = useState([]);

  useEffect(() => {
    const populateProductKeyValuePairs = async () => {
      const { data } = await getProductKeyValuePairs();
      setProductKeyValuePairs(data);
    };

    populateProductKeyValuePairs();
  }, []);

  return (
    <Dropdown
      labelText="Termék"
      name="productId"
      errorMessage="A termék megadása kötelező."
      data={productKeyValuePairs}
      onChange={onChange}
    />
  );
};

export default ProductsDropdown;

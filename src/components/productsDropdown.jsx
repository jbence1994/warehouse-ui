import React, { useEffect, useState } from "react";

import Dropdown from "../components/common/dropdown";

import { getProductKeyValuePairs } from "../services/productService";

const ProductsDropdown = ({ value, onChange }) => {
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
      value={value}
      data={productKeyValuePairs}
      errorMessage="A termék megadása kötelező."
      onChange={onChange}
    />
  );
};

export default ProductsDropdown;

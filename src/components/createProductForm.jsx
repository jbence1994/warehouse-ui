import React, { Fragment, useState } from "react";

import TextInput from "./common/textInput";
import NumberInput from "./common/numberInput";
import MerchantsDropdown from "./merchantsDropdown";
import Submit from "./common/submit";

import { createProduct } from "../services/productService";

const CreateProductForm = () => {
  const [product, setProduct] = useState({
    name: "",
    unit: "",
    price: 0,
    merchantId: 0,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createProduct(product);

    setProduct({ name: "", unit: "", price: 0, merchantId: 0 });

    // TODO: show a toast notification if process was succeed or failed
  };

  const handleTextChange = ({ currentTarget: input }) => {
    const updatedProduct = { ...product };
    updatedProduct[input.name] = input.value;
    setProduct(updatedProduct);
  };

  const handleNumberChange = ({ currentTarget: input }) => {
    const updatedProduct = { ...product };
    updatedProduct[input.name] = parseInt(input.value);
    setProduct(updatedProduct);
  };

  const { name, unit, price, merchantId } = product;

  return (
    <Fragment>
      <form onSubmit={handleSubmit} noValidate>
        <TextInput
          labelText="Termék neve"
          name="name"
          value={name}
          errorMessage="A név megadása kötelező."
          onChange={handleTextChange}
        />
        <TextInput
          labelText="Mennyiségi egység"
          name="unit"
          value={unit}
          errorMessage="A mennyiségi egység megadása kötelező."
          onChange={handleTextChange}
        />
        <NumberInput
          labelText="Termék ára"
          name="price"
          value={price}
          errorMessage="Az ár megadása kötelező."
          onChange={handleNumberChange}
        />
        <MerchantsDropdown value={merchantId} onChange={handleNumberChange} />
        <Submit text="Mentés" />
      </form>
    </Fragment>
  );
};

export default CreateProductForm;

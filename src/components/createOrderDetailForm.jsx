import React from "react";

import ProductsDropdown from "./productsDropdown";
import NumberInput from "./common/numberInput";
import Submit from "./common/submit";

const CreateOrderDetailForm = ({ quantity }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    /*setOrderDetail({ productId: 0, quantity: 0 });*/
  };

  const handleNumberChange = ({ currentTarget: input }) => {
    /*const updatedOrderDetail = { ...orderDetail };
    updatedOrderDetail[input.name] = parseInt(input.value);
    setOrderDetail(updatedOrderDetail);*/
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <ProductsDropdown onChange={handleNumberChange} />
      <NumberInput
        labelText="Mennyiség"
        name="quantity"
        value={quantity}
        errorMessage="A mennyiség megadása kötelező"
        onChange={handleNumberChange}
      />
      <Submit text="Hozzáaáds a vásárláshoz" />
    </form>
  );
};

export default CreateOrderDetailForm;

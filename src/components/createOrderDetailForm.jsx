import React, { useState } from "react";
import ProductsDropdown from "./productsDropdown";
import NumberInput from "./common/numberInput";
import Submit from "./common/submit";

const CreateOrderDetailForm = () => {
  const [orderDetail, setOrderDetail] = useState({
    productId: 0,
    quantity: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(JSON.stringify(orderDetail));

    setOrderDetail({ product: 0, quantity: 0 });
  };

  const handleNumberChange = ({ currentTarget: input }) => {
    const updatedOrderDetail = { ...orderDetail };
    updatedOrderDetail[input.name] = parseInt(input.value);
    setOrderDetail(updatedOrderDetail);
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <ProductsDropdown onChange={handleNumberChange} />
      <NumberInput
        labelText="Mennyiség"
        name="quantity"
        value={orderDetail.quantity}
        errorMessage="A mennyiség megadása kötelező"
        onChange={handleNumberChange}
      />
      <Submit text="Hozzáaáds a vásárláshoz" />
      <h4>OrderDetail: {JSON.stringify(orderDetail)}</h4>
    </form>
  );
};

export default CreateOrderDetailForm;

import React, { useState } from "react";

import TechniciansDropdown from "./techniciansDropdown";
import Submit from "./common/submit";

const CreateOrderForm = () => {
  const [order, setOrder] = useState({
    technicianId: 0,
    orderDetails: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(JSON.stringify(order));
  };

  const handleNumberChange = ({ currentTarget: input }) => {
    const updatedOrder = { ...order };
    updatedOrder[input.name] = parseInt(input.value);
    setOrder(updatedOrder);
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <TechniciansDropdown onChange={handleNumberChange} />
      <Submit text="Vásárlás rögzítése" />
    </form>
  );
};

export default CreateOrderForm;

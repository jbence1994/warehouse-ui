import React from "react";

import TechniciansDropdown from "./techniciansDropdown";

const CreateOrderForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleNumberChange = ({ currentTarget: input }) => {
    /*const updatedOrder = { ...order };
    updatedOrder[input.name] = parseInt(input.value);
    setOrder(updatedOrder);*/
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <TechniciansDropdown onChange={handleNumberChange} />
    </form>
  );
};

export default CreateOrderForm;

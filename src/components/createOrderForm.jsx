import React, { useState } from "react";

import TechniciansDropdown from "./techniciansDropdown";

//import { createOrder } from "../services/orderService";

const CreateOrderForm = () => {
  const [order, setOrder] = useState({
    technicianId: 0,
    orderDetails: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(JSON.stringify(order));
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <TechniciansDropdown />
    </form>
  );
};

export default CreateOrderForm;

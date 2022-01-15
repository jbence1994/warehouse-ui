import React, { useState } from "react";

import Form from "./common/form";
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
    <Form onSubmit={handleSubmit}>
      <TechniciansDropdown />
    </Form>
  );
};

export default CreateOrderForm;

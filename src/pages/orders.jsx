import React, { useState } from "react";

import TechniciansDropdown from "../components/techniciansDropdown";
import ProductsDropdown from "../components/productsDropdown";
import NumberInput from "../components/common/numberInput";
import OrderDetailsListGroup from "../components/orderDetailsListGroup";
import Submit from "../components/common/submit";

// TODO: Raise events from components.

const Orders = () => {
  const [order, setOrder] = useState({
    technicianId: 0,
    orderDetails: [
      { key: 1, value: "Antenna tartókonzol" },
      { key: 2, value: "Vörösréz" },
      { key: 3, value: "6-os anyacsavar" },
    ],
  });

  const [orderDetail, setOrderDetail] = useState({
    productId: 0,
    quantity: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleNumberChange = ({ currentTarget: input }) => {
    /*const updatedOrder = { ...order };
    updatedOrder[input.name] = parseInt(input.value);
    setOrder(updatedOrder);*/
    const updatedOrderDetail = { ...orderDetail };
    updatedOrderDetail[input.name] = parseInt(input.value);
    setOrderDetail(updatedOrderDetail);
  };

  return (
    <React.Fragment>
      <h5>
        <code>Order: {JSON.stringify(order)}</code>
      </h5>
      <h5>
        <code>OrderDetail: {JSON.stringify(orderDetail)}</code>
      </h5>
      <section className="row">
        <article className="col-sm-12 col-md-12 col-lg-6">
          <form onSubmit={handleSubmit} noValidate>
            <TechniciansDropdown onChange={handleNumberChange} />
            <ProductsDropdown onChange={handleNumberChange} />
            <NumberInput
              name="quantity"
              labelText="Mennyiség"
              minValue={1}
              onChange={handleNumberChange}
              errorMessage="A mennyiség megadása kötelező."
            />
            <Submit text="Hozzáadás" />
          </form>
        </article>
        <article className="col-sm-12 col-md-12 col-lg-6">
          <OrderDetailsListGroup collection={order.orderDetails} />
          <form onSubmit={handleSubmit} noValidate>
            <Submit text="Vásárlás rögzítése" />
          </form>
        </article>
      </section>
    </React.Fragment>
  );
};

export default Orders;

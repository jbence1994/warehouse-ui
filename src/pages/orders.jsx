import React, { useState } from "react";

import TechniciansDropdown from "../components/techniciansDropdown";
import ProductsDropdown from "../components/productsDropdown";
import NumberInput from "../components/common/numberInput";
import OrderDetailsListGroup from "../components/orderDetailsListGroup";
import Submit from "../components/common/submit";

const Orders = () => {
  const [order, setOrder] = useState({
    technicianId: 0,
    orderDetails: [],
  });

  const [orderDetail, setOrderDetail] = useState({
    productId: 0,
    quantity: 0,
  });

  const handleOrderDetailAdd = (e) => {
    e.preventDefault();

    const updatedOrder = { ...order };
    updatedOrder.orderDetails.push(orderDetail);
    setOrder(updatedOrder);
    setOrderDetail({ productId: 0, quantity: 0 });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleOrderRelatedNumberChange = ({ currentTarget: input }) => {
    const updatedOrder = { ...order };
    updatedOrder[input.name] = parseInt(input.value);
    setOrder(updatedOrder);
  };

  const handleOrderDetailRelatedNumberChange = ({ currentTarget: input }) => {
    const updatedOrderDetail = { ...orderDetail };
    updatedOrderDetail[input.name] = parseInt(input.value);
    setOrderDetail(updatedOrderDetail);
  };

  return (
    <React.Fragment>
      <section className="row">
        <article className="col-sm-12 col-md-12 col-lg-6">
          <form onSubmit={handleOrderDetailAdd} noValidate>
            <TechniciansDropdown onChange={handleOrderRelatedNumberChange} />
            <ProductsDropdown onChange={handleOrderDetailRelatedNumberChange} />
            <NumberInput
              name="quantity"
              labelText="Mennyiség"
              minValue={1}
              onChange={handleOrderDetailRelatedNumberChange}
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
      <h5>
        <code>Order: {JSON.stringify(order)}</code>
      </h5>
      <h5>
        <code>OrderDetail: {JSON.stringify(orderDetail)}</code>
      </h5>
    </React.Fragment>
  );
};

export default Orders;

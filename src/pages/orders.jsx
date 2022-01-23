import React, { useState } from "react";

import CreateOrderForm from "../components/createOrderForm";
import CreateOrderDetailForm from "../components/createOrderDetailForm";
import OrderDetailsListGroup from "../components/orderDetailsListGroup";

// TODO: Raise events from components.

const Orders = () => {
  const [order, setOrder] = useState({
    technicianId: 0,
    orderDetails: [],
  });

  const [orderDetail, setOrderDetail] = useState({
    productId: 0,
    quantity: 0,
  });

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
          <CreateOrderForm />
          <CreateOrderDetailForm quantity={orderDetail.quantity} />
        </article>
        <article className="col-sm-12 col-md-12 col-lg-6">
          <OrderDetailsListGroup collection={order.orderDetails} />
        </article>
      </section>
    </React.Fragment>
  );
};

export default Orders;

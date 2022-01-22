import React from "react";

import CreateOrderForm from "../components/createOrderForm";
import CreateOrderDetailForm from "../components/createOrderDetailForm";
import OrderDetailsListGroup from "../components/orderDetailsListGroup";

const Orders = () => {
  return (
    <section className="row">
      <article className="col-sm-12 col-md-12 col-lg-6">
        <CreateOrderForm />
        <CreateOrderDetailForm />
      </article>
      <article className="col-sm-12 col-md-12 col-lg-6">
        <OrderDetailsListGroup
          collection={[
            { key: 1, value: "Antenna tartókonzol x 1 darab" },
            { key: 2, value: "Vörösréz x 2 darab" },
            { key: 3, value: "6-os anyacsavar x 5 darab" },
          ]}
        />
      </article>
    </section>
  );
};

export default Orders;

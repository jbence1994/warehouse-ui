import React from "react";

import ListGroup from "./common/listGroup";

const OrderDetailsListGroup = ({ collection }) => {
  return (
    <div className="form-group">
      <h5>Rendelés részletei</h5>
      <ListGroup collection={collection} />
    </div>
  );
};
export default OrderDetailsListGroup;

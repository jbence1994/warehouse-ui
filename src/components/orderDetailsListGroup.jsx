import React from "react";

import ListGroup from "./common/listGroup";

const OrderDetailsListGroup = ({ collection }) => {
  return (
    <React.Fragment>
      <h4>Rendelés részletei</h4>
      <ListGroup collection={collection} />
    </React.Fragment>
  );
};
export default OrderDetailsListGroup;

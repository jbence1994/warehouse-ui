import React, { useState } from "react";

// import ListGroup from "./common/listGroup";

const OrderDetailsListGroup = ({ collection }) => {
  const [total, setTotal] = useState(0);

  return (
    <div className="form-group">
      <h5>Rendelés részletei</h5>
      <ul className="list-group">
        {collection.map(({ productId, quantity }) => (
          <li key={productId} className="list-group-item">
            {`${productId} x ${quantity} darab`}
          </li>
        ))}
      </ul>
      {/*<ListGroup
        collection={[
          { key: "", value: "" },
          { key: "", value: "" },
          { key: "", value: "" },
          { key: "", value: "" },
          { key: "", value: "" },
          { key: "", value: "" },
        ]}
      />*/}
      <h4 className="m-3">Végösszeg: {total}.- Forint</h4>
    </div>
  );
};

export default OrderDetailsListGroup;

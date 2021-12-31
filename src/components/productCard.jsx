import React from "react";

import Card from "../components/common/card";

const ProductCard = ({ name, price, merchantName }) => {
  return (
    <React.Fragment>
      <Card
        title={name}
        // TODO: call api to fetch photo of a product.
        imageSource="https://picsum.photos/500"
        imageAlt={name}
        contents={[
          { key: 1, value: `Ár: ${price}.- Forint` },
          { key: 2, value: `Kereskedő: ${merchantName}` },
        ]}
      />
    </React.Fragment>
  );
};

export default ProductCard;

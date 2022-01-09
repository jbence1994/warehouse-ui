import React from "react";

import Card from "../components/common/card";

import endpoints from "../config/api.endpoints";

const ProductCard = ({ name, price, merchantName, photoFileName }) => {
  const { BASE, PRODUCT_PHOTOS, SLASH } = endpoints;
  const imageSource = `${BASE}${PRODUCT_PHOTOS}${SLASH}${photoFileName}`;

  return (
    <React.Fragment>
      <Card
        title={name}
        imageSource={imageSource}
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

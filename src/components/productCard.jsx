import React from "react";

import Card from "../components/common/card";

import endpoints from "../api.endpoints.json";

const ProductCard = ({ name, price, merchantName, photoFileName }) => {
  const { base, getProductPhotos } = endpoints;
  const imageSource = `${base}${getProductPhotos}${photoFileName}`;

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

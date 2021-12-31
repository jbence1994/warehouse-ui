import React from "react";

import Card from "../components/common/card";

import endpoints from "../api.endpoints.json";

import noImage from "../components/no-image.png";

const ProductCard = ({ name, price, merchantName, photoFileName }) => {
  const { base, getProductPhoto } = endpoints;
  let imageSource = noImage;

  if (photoFileName) {
    imageSource = `${base}${getProductPhoto}${photoFileName}`;
  }

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

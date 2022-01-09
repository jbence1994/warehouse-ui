import React from "react";

import Card from "../components/common/card";

import endpoints from "../config/api.endpoints";

import noImage from "../images/no-image.png";

const ProductCard = ({ name, price, merchantName, photoFileName }) => {
  const { BASE, PRODUCT_PHOTOS, SLASH } = endpoints;
  let imageSource = noImage;

  if (photoFileName) {
    imageSource = `${BASE}${PRODUCT_PHOTOS}${SLASH}${photoFileName}`;
  }

  return (
    <Card
      title={name}
      imageSource={imageSource}
      imageAlt={name}
      contents={[
        { key: 1, value: `Ár: ${price}.- Forint` },
        { key: 2, value: `Kereskedő: ${merchantName}` },
      ]}
    />
  );
};

export default ProductCard;

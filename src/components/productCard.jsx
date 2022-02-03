import React, { useState } from "react";

import Card from "./common/card";

import { uploadPhoto } from "../services/productPhotoService";

import endpoints from "../config/api.endpoints";

import noImage from "../images/no-image.png";

const ProductCard = ({ product }) => {
  const [uploadedPhotoFileName, setUploadedPhotoFileName] = useState("");

  const handlePhotoUpload = async (e) => {
    const photo = [...e.target.files][0];

    const formData = new FormData();
    formData.append("photoToUpload", photo);

    const { data } = await uploadPhoto(id, formData);
    const { fileName } = data;

    setUploadedPhotoFileName(fileName);
  };

  const { id, name, price, merchant, photoFileName } = product;
  const { name: merchantName } = merchant;

  const { API_ROOT, PRODUCT_PHOTOS } = endpoints;

  let imageSource;

  if (photoFileName) {
    imageSource = `${API_ROOT}${PRODUCT_PHOTOS}/${photoFileName}`;
  } else if (uploadedPhotoFileName) {
    imageSource = `${API_ROOT}${PRODUCT_PHOTOS}/${uploadedPhotoFileName}`;
  } else {
    imageSource = noImage;
  }

  const contents = [
    { key: 1, value: `Ár: ${price}.- Forint` },
    { key: 2, value: `Kereskedő: ${merchantName}` },
  ];

  return (
    <Card
      title={name}
      imageSource={imageSource}
      imageAlt={name}
      contents={contents}
      onChange={handlePhotoUpload}
    />
  );
};

export default ProductCard;

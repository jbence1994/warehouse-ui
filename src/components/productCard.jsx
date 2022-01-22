import React from "react";

import { uploadPhoto } from "../services/productPhotoService";

import endpoints from "../config/api.endpoints";

import noImage from "../images/no-image.png";

const ProductCard = ({ id, name, price, merchantName, photoFileName }) => {
  const handlePhotoUpload = async (e) => {
    const photo = [...e.target.files][0];

    const formData = new FormData();
    formData.append("photoToUpload", photo);

    const { data } = await uploadPhoto(id, formData);
    console.log(data);
  };

  const { API_ROOT, PRODUCT_PHOTOS } = endpoints;

  const imageSource = photoFileName
    ? `${API_ROOT}${PRODUCT_PHOTOS}/${photoFileName}`
    : noImage;

  const cardContents = [
    { key: 1, value: `Ár: ${price}.- Forint` },
    { key: 2, value: `Kereskedő: ${merchantName}` },
  ];

  return (
    <div className="card mt-3 mb-3">
      <label htmlFor="photo-upload">
        <img
          src={imageSource}
          className="card-img-top"
          style={{
            width: "250px",
            height: "250px",
            display: "block",
            margin: "0 auto",
            objectFit: "fill",
          }}
          alt={name}
        />
        <input
          type="file"
          id="photo-upload"
          onChange={handlePhotoUpload}
          style={{
            fontSize: "100px",
            position: "absolute",
            left: "0",
            top: "0",
            opacity: "0",
          }}
        />
      </label>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        {cardContents.map((content) => (
          <p className="card-text" key={content.key}>
            {content.value}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;

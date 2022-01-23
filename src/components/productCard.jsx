import React, { useState } from "react";

import { uploadPhoto } from "../services/productPhotoService";

import endpoints from "../config/api.endpoints";

import noImage from "../images/no-image.png";

const ProductCard = ({ id, name, price, merchantName, photoFileName }) => {
  const [uploadedPhotoFileName, setUploadedPhotoFileName] = useState("");

  const handlePhotoUpload = async (e) => {
    const photo = [...e.target.files][0];

    const formData = new FormData();
    formData.append("photoToUpload", photo);

    const { data } = await uploadPhoto(id, formData);
    const { fileName } = data;

    setUploadedPhotoFileName(fileName);
  };

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
        {contents.map(({ key, value }) => (
          <p className="card-text" key={key}>
            {value}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;

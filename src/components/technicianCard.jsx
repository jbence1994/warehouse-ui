import React, { useState } from "react";

import Card from "./common/card";

import { uploadPhoto } from "../services/technicianPhotoService";

import endpoints from "../config/api.endpoints";

import noImage from "../images/no-image.png";

const TechnicianCard = ({ technician }) => {
  const [uploadedPhotoFileName, setUploadedPhotoFileName] = useState("");

  const handlePhotoUpload = async (e) => {
    const photo = [...e.target.files][0];

    const formData = new FormData();
    formData.append("photoToUpload", photo);

    const { data } = await uploadPhoto(id, formData);
    const { fileName } = data;

    setUploadedPhotoFileName(fileName);
  };

  const { id, name, email, phone, balance, photoFileName } = technician;

  const { API_ROOT, TECHNICIAN_PHOTOS } = endpoints;

  let imageSource;

  if (photoFileName) {
    imageSource = `${API_ROOT}${TECHNICIAN_PHOTOS}/${photoFileName}`;
  } else if (uploadedPhotoFileName) {
    imageSource = `${API_ROOT}${TECHNICIAN_PHOTOS}/${uploadedPhotoFileName}`;
  } else {
    imageSource = noImage;
  }

  const contents = [
    { key: 1, value: `E-mail: ${email}` },
    { key: 2, value: `Telefon: ${phone}` },
    { key: 3, value: `Egyenleg: ${balance}.- Forint` },
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

export default TechnicianCard;

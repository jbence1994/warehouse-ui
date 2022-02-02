import React, { useState } from "react";

import Card from "./common/card";

// TODO: import endpoints from "../config/api.endpoints";

import noImage from "../images/no-image.png";

const TechnicianCard = ({ technician }) => {
  const [uploadedPhotoFileName, setUploadedPhotoFileName] = useState("");

  const handlePhotoUpload = async (e) => {
    e.preventDefault();

    console.log(`Sending technician #${id} photo to server.`);

    setUploadedPhotoFileName("");
  };

  const { id, name, email, phone, balance, photoFileName } = technician;

  // TODO: const { API_ROOT } = endpoints;

  let imageSource;

  if (photoFileName) {
    // TODO: imageSource = `${API_ROOT}${TECHNICIAN_PHOTOS}/${photoFileName}`;
  } else if (uploadedPhotoFileName) {
    // TODO: imageSource = `${API_ROOT}${TECHNICIAN_PHOTOS}/${uploadedPhotoFileName}`;
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

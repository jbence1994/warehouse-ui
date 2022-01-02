import React, { useState } from "react";

import Submit from "./common/submit";

import { uploadPhoto } from "../services/productPhotoService";

const UploadPhotoForm = ({ productId }) => {
  const [photoToUpload, setPhotoToUpload] = useState({});

  const onPhotoUpload = (e) => {
    const photo = [...e.target.files][0];
    setPhotoToUpload(photo);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("photoToUpload", photoToUpload);

    const { data } = await uploadPhoto(productId, formData);

    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div
      /*style={{
          position: "relative",
          overflow: "hidden",
        }}*/
      >
        <input
          type="file"
          onChange={onPhotoUpload}
          /*style={{
            fontSize: "100px",
            position: "absolute",
            left: "0",
            top: "0",
            opacity: "0",
          }}*/
        />
        <Submit text="Kép feltöltése" />
      </div>
    </form>
  );
};

export default UploadPhotoForm;

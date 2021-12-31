import React from "react";

import Submit from "./common/submit";

// TODO: import { uploadPhoto } from "../services/productPhotoService";

const UploadPhotoForm = ({ productId }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`TODO: Send photo of product #${productId} to server.`);
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <Submit text="Kép feltöltése" />
    </form>
  );
};

export default UploadPhotoForm;

//TODO: CSS properties.

/*.photo-upload {
  position: relative;
  overflow: hidden;
}

.photo-upload input[type="file"] {
  font-size: 100px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
}*/

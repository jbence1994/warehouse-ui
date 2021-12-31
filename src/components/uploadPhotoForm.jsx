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
      <div
        style={{
          position: "relative",
          overflow: "hidden",
        }}
      >
        <input
          type="file"
          style={{
            fontSize: "100px",
            position: "absolute",
            left: "0",
            top: "0",
            opacity: "0",
          }}
        />
        <Submit text="Kép feltöltése" />
      </div>
    </form>
  );
};

export default UploadPhotoForm;

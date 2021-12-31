import React from "react";

import Submit from "./common/submit";

import { uploadPhoto } from "../services/productPhotoService";

const UploadPhotoForm = ({ productId }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Hello");
    const { data } = await uploadPhoto(productId, null); //TODO: get photo obj.

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

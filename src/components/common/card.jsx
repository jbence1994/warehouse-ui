import React from "react";

const Card = ({ title, imageSource, imageAlt, contents, onChange }) => {
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
          alt={imageAlt}
        />
        <input
          type="file"
          id="photo-upload"
          className="form-control-file"
          onChange={onChange}
          style={{
            position: "absolute",
            inset: "0",
            opacity: "0",
          }}
        />
      </label>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        {contents.map((content) => (
          <p className="card-text" key={content.key}>
            {content.value}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Card;

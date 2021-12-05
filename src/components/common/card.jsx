import React from "react";

const Card = ({ title, imageSource, imageAlt, contents }) => {
  return (
    <div className="card mt-3 mb-3">
      <img src={imageSource} className="card-img-top" alt={imageAlt} />
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

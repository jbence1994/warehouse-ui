import React from "react";

const ListGroup = ({ collection }) => {
  return (
    <ul className="list-group">
      {collection.map(({ key, value }) => (
        <li key={key} className="list-group-item">
          {value}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;

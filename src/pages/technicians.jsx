import React from "react";
import { Link } from "react-router-dom";

const Technicians = () => {
  const technicians = [1, 2, 3, 4];

  return (
    <ul>
      {technicians.map((id) => (
        <li key={id}>
          <Link to={`technikus/${id}`}>{id}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Technicians;

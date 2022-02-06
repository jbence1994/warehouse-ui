import React from "react";
import { Link } from "react-router-dom";

const Technicians = () => {
  const technicians = [1, 2, 3, 4];

  return (
    <section className="row">
      <article className="col-12">
        {technicians.map((id) => (
          <li key={id}>
            <Link to={`technikus/${id}`}>{id}</Link>
          </li>
        ))}
      </article>
    </section>
  );
};

export default Technicians;

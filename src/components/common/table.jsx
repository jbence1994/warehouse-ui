import React from "react";

import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({ caption, collection, columns }) => {
  return (
    <React.Fragment>
      <h5>{caption}</h5>
      <table className="table table-responsive table-hover">
        <TableHeader columns={columns} />
        <TableBody collection={collection} columns={columns} />
      </table>
    </React.Fragment>
  );
};

export default Table;

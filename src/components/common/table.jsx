import React from "react";

import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({ collection, columns }) => {
  return (
    <table className="table table-responsive table-hover">
      <TableHeader columns={columns} />
      <TableBody collection={collection} columns={columns} />
    </table>
  );
};

export default Table;

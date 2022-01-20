import React from "react";

import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({ columns }) => {
  return (
    <table className="table table-responsive table-hover">
      <TableHeader columns={columns} />
      <TableBody />
    </table>
  );
};

export default Table;

import React from "react";

import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({ columns }) => {
  const collection = [
    { id: "1", path: "id" },
    { id: "2", path: "createdDateTime" },
    { id: "3", path: "total" },
  ];

  return (
    <table className="table table-responsive table-hover">
      <TableHeader columns={columns} />
      <TableBody collection={collection} columns={columns} />
    </table>
  );
};

export default Table;

import React, { Fragment } from "react";

import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({ caption, columns, collection }) => {
  return (
    <Fragment>
      <h5>{caption}</h5>
      <table className="table table-responsive table-hover text-center">
        <TableHeader columns={columns} />
        <TableBody collection={collection} columns={columns} />
      </table>
    </Fragment>
  );
};

export default Table;

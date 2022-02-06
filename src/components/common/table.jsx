import React, { Fragment } from "react";

const Table = ({ caption, columns, collection }) => {
  return (
    <Fragment>
      <h5>{caption}</h5>
      <table className="table table-responsive table-hover text-center">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>{column.value}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {collection.map((item) => (
            <tr key={item.id}>
              {columns.map((column) => (
                <td key={`${item.id}${column.value}`}>{item[column.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Table;

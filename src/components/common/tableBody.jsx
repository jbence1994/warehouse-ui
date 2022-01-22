import React from "react";

const TableBody = ({ collection, columns }) => {
  return (
    <tbody>
      {collection.map((item) => (
        <tr key={item.id}>
          {columns.map((column) => (
            <td key={`${item.id}${column.value}`}>{item[column.key]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;

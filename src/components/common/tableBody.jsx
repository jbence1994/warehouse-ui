import React from "react";

const TableBody = ({ collection, columns }) => {
  const createKey = (item, column) => `${item.id}${column.value}`;

  const renderCell = (item, column) => item[column.key];

  return (
    <tbody>
      {collection.map((item) => (
        <tr key={item.id}>
          {columns.map((column) => (
            <td key={createKey(item, column)}>{renderCell(item, column)}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;

import React from "react";

import Table from "./common/table";

const TechnicianOrdersTable = () => {
  const columns = [
    { key: 1, value: "Rendelés azonosító" },
    { key: 2, value: "Dátum" },
    { key: 3, value: "Végösszeg" },
  ];

  return <Table columns={columns} />;
};

export default TechnicianOrdersTable;

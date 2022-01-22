import React from "react";

import Table from "./common/table";

const TechnicianOrdersTable = ({ technicianId }) => {
  const columns = [
    { key: 1, value: "Azonosító" },
    { key: 2, value: "Dátum" },
    { key: 3, value: "Összeg" },
  ];

  return <Table collection={[]} columns={columns} />;
};

export default TechnicianOrdersTable;

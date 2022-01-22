import React, { useEffect, useState } from "react";

import Table from "./common/table";

import { getTechnicianBalances } from "../services/technicianBalanceService";

const TechnicianOrdersTable = ({ technicianId }) => {
  const [technicianBalances, setTechnicianBalances] = useState([]);

  useEffect(() => {
    const populateTechnicianBalances = async (id) => {
      const { data } = await getTechnicianBalances(id);
      setTechnicianBalances(data);
    };

    populateTechnicianBalances(technicianId);
  }, [technicianId]);

  const columns = [
    { key: "createdDateTime", value: "Dátum" },
    { key: "amount", value: "Összeg" },
  ];

  return (
    <Table
      caption="Egyenleg info"
      collection={technicianBalances}
      columns={columns}
    />
  );
};

export default TechnicianOrdersTable;

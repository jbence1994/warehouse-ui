import React, { useEffect, useState } from "react";

import Table from "./common/table";

import { getTechnicianOrders } from "../services/technicianOrderService";

const TechnicianOrdersTable = ({ technicianId }) => {
  const [technicianOrders, setTechnicianOrders] = useState([]);

  useEffect(() => {
    const populateTechnicianOrders = async (id) => {
      const { data } = await getTechnicianOrders(id);
      setTechnicianOrders(data);
    };

    populateTechnicianOrders(technicianId);
  }, [technicianId]);

  const columns = [
    { key: "createdDateTime", value: "Dátum" },
    { key: "total", value: "Végösszeg" },
  ];

  return (
    <Table
      caption="Rendelések"
      collection={technicianOrders}
      columns={columns}
    />
  );
};

export default TechnicianOrdersTable;

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
    { key: 1, value: "Azonosító" },
    { key: 2, value: "Dátum" },
    { key: 3, value: "Végösszeg" },
  ];

  return <Table collection={technicianOrders} columns={columns} />;
};

export default TechnicianOrdersTable;

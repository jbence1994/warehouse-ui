import React, { useEffect, useState } from "react";

import { getTechnicians } from "../services/technicianService";
import Table from "./common/table";

const TechniciansTable = () => {
  const [technicians, setTechnicians] = useState([]);

  useEffect(() => {
    const populateTechnicians = async () => {
      try {
        const { data } = await getTechnicians();
        setTechnicians(data);
      } catch (e) {
        window.location.href = "/error";
      }
    };

    populateTechnicians();
  }, []);

  const columns = [
    { key: 1, value: "Név" },
    { key: 2, value: "E-mail" },
    { key: 3, value: "Telefonszám" },
    { key: 4, value: "" },
  ];

  return (
    <Table caption="Technikusok" columns={columns} collection={technicians} />
  );
};

export default TechniciansTable;

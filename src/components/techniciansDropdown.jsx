import React, { useEffect, useState } from "react";

import Dropdown from "../components/common/dropdown";

import { getTechnicians } from "../services/techniciansService";

const TechniciansDropdown = ({ onChange }) => {
  const [technicianKeyValuePairs, setTechnicianKeyValuePairs] = useState([]);

  useEffect(() => {
    const populateTechnicianKeyValuePairs = async () => {
      const { data } = await getTechnicians();
      setTechnicianKeyValuePairs(data);
    };

    populateTechnicianKeyValuePairs();
  }, []);

  return (
    <Dropdown
      labelText="Technikus"
      name="technicianId"
      errorMessage="A technikus megadása kötelező."
      data={technicianKeyValuePairs}
      onChange={onChange}
    />
  );
};

export default TechniciansDropdown;

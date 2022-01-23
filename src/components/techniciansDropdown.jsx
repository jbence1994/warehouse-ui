import React, { useEffect, useState } from "react";

import Dropdown from "../components/common/dropdown";

import { getTechnicianKeyValuePairs } from "../services/techniciansService";

const TechniciansDropdown = ({ onChange }) => {
  const [technicianKeyValuePairs, setTechnicianKeyValuePairs] = useState([]);

  useEffect(() => {
    const populateTechnicianKeyValuePairs = async () => {
      const { data } = await getTechnicianKeyValuePairs();
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

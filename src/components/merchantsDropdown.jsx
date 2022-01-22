import React, { useEffect, useState } from "react";

import Dropdown from "../components/common/dropdown";

import { getMerchantKeyValuePairs } from "../services/merchantService";

const MerchantsDropdown = ({ onChange }) => {
  const [merchantKeyValuePairs, setMerchantKeyValuePairs] = useState([]);

  useEffect(() => {
    const populateMerchantKeyValuePairs = async () => {
      try {
        const { data } = await getMerchantKeyValuePairs();
        setMerchantKeyValuePairs(data);
      } catch (e) {
        window.location.href = "/error";
      }
    };

    populateMerchantKeyValuePairs();
  }, []);

  return (
    <Dropdown
      labelText="Kereskedő"
      name="merchantId"
      errorMessage="A kereskedő megadása kötelező."
      data={merchantKeyValuePairs}
      onChange={onChange}
    />
  );
};

export default MerchantsDropdown;

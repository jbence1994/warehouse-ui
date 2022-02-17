import restClient from "axios";

import endpoints from "../config/api.endpoints";

const { API_ROOT, SUPPLIES } = endpoints;

const createSupply = async (supply) => {
  const endpointToCall = `${API_ROOT}${SUPPLIES}`;

  return await restClient.post(endpointToCall, supply);
};

export { createSupply };

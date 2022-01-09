import restClient from "axios";

import endpoints from "../config/api.endpoints";

const createSupply = async (supply) => {
  const { BASE, SUPPLIES } = endpoints;

  const endpointToCall = `${BASE}${SUPPLIES}`;

  return await restClient.post(endpointToCall, supply);
};

export { createSupply };

import restClient from "axios";

import endpoints from "./endpoints.json";

const createSupply = async (supply) => {
  const { base, createSupply } = endpoints;

  const endpointToCall = `${base}${createSupply}`;

  return await restClient.post(endpointToCall, supply);
};

export { createSupply };

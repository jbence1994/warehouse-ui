import restClient from "axios";

import endpoints from "./endpoints.json";

const baseEndpoint = endpoints.base;

const getSupplies = async () => {
  const endpoint = `${baseEndpoint}${endpoints.supplies}`;
  return await restClient.get(endpoint);
};

export { getSupplies };

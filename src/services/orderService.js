import restClient from "axios";

import endpoints from "../config/api.endpoints";

const { API_ROOT, ORDERS } = endpoints;

const createOrder = async (order) => {
  const endpointToCall = `${API_ROOT}${ORDERS}`;

  return await restClient.post(endpointToCall, order);
};

export { createOrder };

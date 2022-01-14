import restClient from "axios";

import endpoints from "../config/api.endpoints";

const getTechnician = async (id) => {
  const { API_ROOT, TECHNICIANS, INCLUDE_ORDERS } = endpoints;

  const endpointToCall = `${API_ROOT}${TECHNICIANS}/${id}${INCLUDE_ORDERS}`;

  return await restClient.get(endpointToCall);
};

export { getTechnician };
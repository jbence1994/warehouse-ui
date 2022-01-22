import restClient from "axios";

import endpoints from "../config/api.endpoints";

const getTechnicianOrders = async (id) => {
  const { API_ROOT, TECHNICIANS, TECHNICIAN_ORDERS } = endpoints;

  const endpointToCall = `${API_ROOT}${TECHNICIANS}/${id}/${TECHNICIAN_ORDERS}`;

  return await restClient.get(endpointToCall);
};

export { getTechnicianOrders };

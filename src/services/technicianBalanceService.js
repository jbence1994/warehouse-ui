import restClient from "axios";

import endpoints from "../config/api.endpoints";

const getTechnicianBalances = async (id) => {
  const { API_ROOT, TECHNICIANS, TECHNICIAN_BALANCES } = endpoints;

  const endpointToCall = `${API_ROOT}${TECHNICIANS}/${id}/${TECHNICIAN_BALANCES}`;

  return await restClient.get(endpointToCall);
};

export { getTechnicianBalances };

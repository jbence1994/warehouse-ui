import restClient from "axios";

import endpoints from "../config/api.endpoints";

const { API_ROOT, TECHNICIANS } = endpoints;

const getTechnicians = async () => {
  const endpointToCall = `${API_ROOT}${TECHNICIANS}`;

  return await restClient.get(endpointToCall);
};

const getTechnician = async (id) => {
  const endpointToCall = `${API_ROOT}${TECHNICIANS}/${id}`;

  return await restClient.get(endpointToCall);
};

export { getTechnicians, getTechnician };

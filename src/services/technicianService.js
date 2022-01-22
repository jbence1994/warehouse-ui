import restClient from "axios";

import endpoints from "../config/api.endpoints";

const getTechnician = async (id) => {
  const { API_ROOT, TECHNICIANS } = endpoints;

  const endpointToCall = `${API_ROOT}${TECHNICIANS}/${id}`;

  return await restClient.get(endpointToCall);
};

export { getTechnician };

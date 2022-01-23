import restClient from "axios";

import endpoints from "../config/api.endpoints";

const getTechnicianKeyValuePairs = async () => {
  const { API_ROOT, TECHNICIANS, AS_KEY_VALUE_PAIR } = endpoints;

  const endpointToCall = `${API_ROOT}${TECHNICIANS}${AS_KEY_VALUE_PAIR}`;

  return await restClient.get(endpointToCall);
};

export { getTechnicianKeyValuePairs };

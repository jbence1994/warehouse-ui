import restClient from "axios";

import endpoints from "../config/api.endpoints";

const { API_ROOT, TECHNICIANS, AS_KEY_VALUE_PAIR } = endpoints;

const getTechnicianKeyValuePairs = async () => {
  const endpointToCall = `${API_ROOT}${TECHNICIANS}${AS_KEY_VALUE_PAIR}`;

  return await restClient.get(endpointToCall);
};

export { getTechnicianKeyValuePairs };

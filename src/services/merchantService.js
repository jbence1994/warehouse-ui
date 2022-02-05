import restClient from "axios";

import endpoints from "../config/api.endpoints";

const getMerchantKeyValuePairs = async () => {
  const { API_ROOT, MERCHANTS, AS_KEY_VALUE_PAIR } = endpoints;

  const endpointToCall = `${API_ROOT}${MERCHANTS}${AS_KEY_VALUE_PAIR}`;

  return await restClient.get(endpointToCall);
};

export { getMerchantKeyValuePairs };

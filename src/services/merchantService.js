import restClient from "axios";

import endpoints from "../config/api.endpoints";

const getMerchantKeyValuePairs = async () => {
  const { BASE, MERCHANTS, KEY_VALUE_PAIRS } = endpoints;

  const endpointToCall = `${BASE}${MERCHANTS}${KEY_VALUE_PAIRS}`;

  return await restClient.get(endpointToCall);
};

export { getMerchantKeyValuePairs };

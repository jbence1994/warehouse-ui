import restClient from "axios";

import endpoints from "../config/api.endpoints";

const getMerchantKeyValuePairs = async () => {
  const { API_ROOT, MERCHANTS, AS_KEY_VALUE_PAIR } = endpoints;

  const endpointToCall = `${API_ROOT}${MERCHANTS}${AS_KEY_VALUE_PAIR}`;

  return await restClient.get(endpointToCall);
};

const createMerchant = async (merchant) => {
  const { API_ROOT, MERCHANTS } = endpoints;

  const endpointToCall = `${API_ROOT}${MERCHANTS}`;

  return await restClient.post(endpointToCall, merchant);
};

export { getMerchantKeyValuePairs, createMerchant };

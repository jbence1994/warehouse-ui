import restClient from "axios";

import endpoints from "../api.endpoints.json";

const getMerchantKeyValuePairs = async () => {
  const { base, getMerchantKeyValuePairs } = endpoints;

  const endpointToCall = `${base}${getMerchantKeyValuePairs}`;
  console.log(endpointToCall);
  return await restClient.get(endpointToCall);
};

export { getMerchantKeyValuePairs };

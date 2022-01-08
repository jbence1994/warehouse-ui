import restClient from "axios";

import endpoints from "../api.endpoints.json";

const getMerchantKeyValuePairs = async () => {
  const { base, getMerchants, inKeyValuePairFormatWithProducts } = endpoints;

  const endpointToCall = `${base}${getMerchants}${inKeyValuePairFormatWithProducts}`;

  return await restClient.get(endpointToCall);
};

export { getMerchantKeyValuePairs };

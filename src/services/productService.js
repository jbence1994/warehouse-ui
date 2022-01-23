import restClient from "axios";

import endpoints from "../config/api.endpoints";

const getProducts = async (includeMerchants = true) => {
  const { API_ROOT, PRODUCTS, INCLUDE_MERCHANT } = endpoints;

  let endpointToCall = API_ROOT;

  endpointToCall += includeMerchants
    ? `${PRODUCTS}${INCLUDE_MERCHANT}`
    : `${PRODUCTS}`;

  return await restClient.get(endpointToCall);
};

const getProductKeyValuePairs = async () => {
  const { API_ROOT, PRODUCTS, AS_KEY_VALUE_PAIR } = endpoints;

  const endpointToCall = `${API_ROOT}${PRODUCTS}${AS_KEY_VALUE_PAIR}`;

  return await restClient.get(endpointToCall);
};

export { getProducts, getProductKeyValuePairs };

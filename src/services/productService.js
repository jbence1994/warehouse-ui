import restClient from "axios";

import endpoints from "../config/api.endpoints";

const getProducts = async () => {
  const { API_ROOT, PRODUCTS } = endpoints;

  const endpointToCall = `${API_ROOT}${PRODUCTS}`;

  return await restClient.get(endpointToCall);
};

const getProductKeyValuePairs = async () => {
  const { API_ROOT, PRODUCTS, AS_KEY_VALUE_PAIR } = endpoints;

  const endpointToCall = `${API_ROOT}${PRODUCTS}${AS_KEY_VALUE_PAIR}`;

  return await restClient.get(endpointToCall);
};

export { getProducts, getProductKeyValuePairs };

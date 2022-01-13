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

export { getProducts };

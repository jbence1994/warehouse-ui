import restClient from "axios";

import endpoints from "../config/api.endpoints";

const getProducts = async (includeMerchants = true) => {
  const { BASE, PRODUCTS, PRODUCTS_INCLUDE_MERCHANT } = endpoints;

  let endpointToCall = BASE;

  endpointToCall += includeMerchants
    ? `${PRODUCTS}${PRODUCTS_INCLUDE_MERCHANT}`
    : `${PRODUCTS}`;

  return await restClient.get(endpointToCall);
};

export { getProducts };

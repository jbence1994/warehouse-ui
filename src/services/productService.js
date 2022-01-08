import restClient from "axios";

import endpoints from "../config/api.endpoints.json";

const getProducts = async (includeMerchants = true) => {
  const { base, getProducts, includeMerchantWithProducts } = endpoints;

  let endpointToCall = base;

  if (includeMerchants) {
    endpointToCall += `${getProducts}${includeMerchantWithProducts}`;
  } else {
    endpointToCall += `${getProducts}`;
  }

  return await restClient.get(endpointToCall);
};

export { getProducts };

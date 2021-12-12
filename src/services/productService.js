import restClient from "axios";

import endpoints from "./endpoints.json";

const baseEndpoint = endpoints.base;

const getProducts = async (includeMerchants = true) => {
  let endpoint = baseEndpoint;

  if (includeMerchants) {
    endpoint += `${endpoints.products}${endpoints.includeMerchantWithProducts}`;
  } else {
    endpoint += `${endpoints.products}`;
  }

  return await restClient.get(endpoint);
};

export { getProducts };

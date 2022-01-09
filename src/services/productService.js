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

const createProduct = async (product) => {
  const { BASE, PRODUCTS } = endpoints;

  const endpointToCall = `${BASE}${PRODUCTS}`;

  return await restClient.post(endpointToCall, product);
};

export { getProducts, createProduct };

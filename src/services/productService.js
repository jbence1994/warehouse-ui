import restClient from "axios";

import endpoints from "../config/api.endpoints";

const { API_ROOT, PRODUCTS } = endpoints;

const getProducts = async () => {
  const endpointToCall = `${API_ROOT}${PRODUCTS}`;

  return await restClient.get(endpointToCall);
};

const createProduct = async (product) => {
  const endpointToCall = `${API_ROOT}${PRODUCTS}`;

  return await restClient.post(endpointToCall, product);
};

export { getProducts, createProduct };

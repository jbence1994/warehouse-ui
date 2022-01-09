import restClient from "axios";

import endpoints from "../config/api.endpoints.json";

const getProducts = async (includeMerchants = true) => {
  const { base, getProductsOrCreateProduct, includeMerchantWithProducts } =
    endpoints;

  let endpointToCall = base;

  if (includeMerchants) {
    endpointToCall += `${getProductsOrCreateProduct}${includeMerchantWithProducts}`;
  } else {
    endpointToCall += `${getProductsOrCreateProduct}`;
  }

  return await restClient.get(endpointToCall);
};

const createProduct = async (product) => {
  const { base, getProductsOrCreateProduct } = endpoints;

  const endpointToCall = `${base}${getProductsOrCreateProduct}`;

  return await restClient.post(endpointToCall, product);
};

export { getProducts, createProduct };

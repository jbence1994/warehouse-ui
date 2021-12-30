import restClient from "axios";

import endpoints from "./endpoints.json";

const getProductPhotos = async (includeMerchants = true) => {
  const { base, getProductPhotos } = endpoints;

  const endpointToCall = `${base}${getProductPhotos}`;

  return await restClient.get(endpointToCall);
};

export { getProductPhotos };

import restClient from "axios";

import endpoints from "../config/api.endpoints";

const uploadPhoto = async (productId, photo) => {
  const { BASE, PRODUCT_PHOTOS, SLASH } = endpoints;

  const endpointToCall = `${BASE}${PRODUCT_PHOTOS}${SLASH}${productId}`;

  return await restClient.post(endpointToCall, photo);
};

export { uploadPhoto };

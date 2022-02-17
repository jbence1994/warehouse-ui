import restClient from "axios";

import endpoints from "../config/api.endpoints";

const { API_ROOT, PRODUCT_PHOTOS } = endpoints;

const uploadPhoto = async (productId, photo) => {
  const endpointToCall = `${API_ROOT}${PRODUCT_PHOTOS}/${productId}`;

  return await restClient.post(endpointToCall, photo);
};

export { uploadPhoto };

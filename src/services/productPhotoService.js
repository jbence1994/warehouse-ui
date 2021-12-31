import restClient from "axios";

import endpoints from "../api.endpoints.json";

const uploadPhoto = async (productId, photo) => {
  const { base, uploadProductPhotoOrGetProductPhoto } = endpoints;

  const endpointToCall = `${base}${uploadProductPhotoOrGetProductPhoto}${productId}`;

  return await restClient.post(endpointToCall, photo);
};

export { uploadPhoto };

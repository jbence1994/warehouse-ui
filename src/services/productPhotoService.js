import restClient from "axios";

import endpoints from "../api.endpoints.json";

const uploadPhoto = (productId, photo) => {
  const { base, uploadProductPhotoOrGetProductPhoto } = endpoints;

  const endpointToCall = `${base}${uploadProductPhotoOrGetProductPhoto}${productId}`;

  return restClient.post(endpointToCall, photo);
};

export { uploadPhoto };

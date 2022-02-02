import restClient from "axios";

import endpoints from "../config/api.endpoints";

const uploadPhoto = async (technicianId, photo) => {
  const { API_ROOT, TECHNICIAN_PHOTOS } = endpoints;

  const endpointToCall = `${API_ROOT}${TECHNICIAN_PHOTOS}/${technicianId}`;

  return await restClient.post(endpointToCall, photo);
};

export { uploadPhoto };

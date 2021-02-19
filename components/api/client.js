import { create } from "apisauce";
import cache from "../authorization/cache";
import authStorage from "../authorization/store";

const apiClient = create({
    baseURL: "https://medisend-pharmacy.herokuapp.com",
    headers: {
    'Authorization' :
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjliMThlZGIyYmM2ZGEwMTBkZGJiYjciLCJpYXQiOjE2MDUxOTMyNTcsImV4cCI6MTYwNTI3OTY1N30.E-dM1dBgKTFQIc_QjCxn5BZ9fD77PpKYB0Q57Zi0be4',
    },
  });

// apiClient.addAsyncRequestTransform(async (request) => {
//   const authToken = await authStorage.getToken();
//   if (!authToken) return;
//   request.headers["Authorization"] = authToken.accessToken;
// });
  
  const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }

  const data = await cache.get(url);
  return data ? { ok: true, data } : response;
};

export default apiClient;

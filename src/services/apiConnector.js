import axios from "axios";

// Create a single axios instance
export const axiosInstance = axios.create({});

// apiConnector with optional token inclusion
export const apiConnector = (method, url, bodyData, headers = {}, params = {}, includeAuth = true, token=null) => {
  const localToken = JSON.parse(localStorage.getItem("token"));
  const finalToken = token || localToken;

  // Build final headers
  const finalHeaders = {
    ...headers,
    ...(includeAuth && finalToken ? { Authorization: `Bearer ${finalToken}` } : {}),
  };

  return axiosInstance({
    method,
    url,
    data: bodyData || null,
    headers: finalHeaders,
    params: params || null,
  });
};

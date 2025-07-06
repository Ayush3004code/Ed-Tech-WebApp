import axios from "axios";

// Create a single axios instance
export const axiosInstance = axios.create({});

// apiConnector with optional token inclusion
export const apiConnector = (method, url, bodyData, headers = {}, params = {}, includeAuth = true) => {
  const token = JSON.parse(localStorage.getItem("token"));

  // Build final headers
  const finalHeaders = {
    ...headers,
    ...(includeAuth && token ? { Authorization: `Bearer ${token}` } : {}),
  };

  return axiosInstance({
    method,
    url,
    data: bodyData || null,
    headers: finalHeaders,
    params: params || null,
  });
};

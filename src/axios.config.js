import axios from "axios";
import { ORT_API_URL } from "./config";

const ortInstance = axios.create({
  baseURL: ORT_API_URL,
  timeout: 120000,
});

ortInstance.interceptors.request.use((config) => {
  const apiKey = "9f6f6a2b2748bf24821914720b1152a9";
  if (apiKey !== undefined) config.headers["apikey"] = apiKey;
  return config;
});

export { ortInstance };

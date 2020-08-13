import axios from "axios";
// TODO
import { TODO_API } from "./config";

const localInstance = axios.create({
  baseURL: TODO_API,
  timeout: 120000,
});

export { localInstance };

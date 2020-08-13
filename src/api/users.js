import { ortInstance } from "../axios.config";

export async function getUser(email) {
  return await ortInstance.get(`users/?email=${email}`);
}

import { ortInstance } from "../axios.config";

export async function getAuthentication(body) {
  return await ortInstance.post("login.php", body);
}

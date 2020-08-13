import { ortInstance } from "../axios.config";

export async function obtenerRubros() {
  return await ortInstance.get(`rubros.php`);
}

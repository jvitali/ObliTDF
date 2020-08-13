import { ortInstance } from "../axios.config";

export async function darAltaGastos() {
  return await ortInstance.post(`gastos.php`);
}

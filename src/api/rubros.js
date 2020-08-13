import { ortInstance } from "../axios.config";

export async function obtenerRubros() {
  // TODO Aclaracion: los verbos de los requests van a ser GET, POST, DELETE
  // http://xpense.develotion.com/rubros.php
  return await ortInstance.get(`rubros.php`);
}

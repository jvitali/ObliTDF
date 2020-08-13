import React from "react";
import { Typography } from "@material-ui/core";
import MaterialTable from "material-table";

export default function ListaGasto() {
  // 1 - con dispatch vas a tener que llamar a la api para traer todos los gastos
  // 2 - useSelector para traer del store todos los datos de gastos (estos datos se van a usar en data (punto numero 3))
  // 3 - en data = { valorDeUseSelector }

  // Para hacer el delete: usar un Dispatch de una accion para hacer delete

  return (
    <>
      <Typography variant="h5">Lista de Gastos</Typography>
      <MaterialTable
        title="Lista Gastos"
        columns={[
          { title: "Gastos", field: "gastos" },
          { title: "Monto", field: "monto" },
        ]}
        data={[
          { gastos: "Compra 1", monto: 10 },
          { gastos: "Compra 2", monto: 10 },
          { gastos: "Compra 3", monto: 10 },
          { gastos: "Compra", monto: 10 },
          { gastos: "Compra", monto: 10 },
          { gastos: "Compra", monto: 10 },
          { gastos: "Compra", monto: 10 },
          { gastos: "Compra", monto: 10 },
        ]}
        actions={[
          /*  {
            icon: "save",
            tooltip: "Save User",
            onClick: (event, rowData) => alert("You saved " + rowData.name),
          }, */
          (rowData) => ({
            icon: "delete",
            tooltip: "Delete User",
            onClick: (event, rowData) =>
              alert("You want to delete " + rowData.gastos),
          }),
        ]}
        options={{
          actionsColumnIndex: -1,
        }}
      />
    </>
  );
}

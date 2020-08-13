import React from "react";
import { Typography } from "@material-ui/core";
import MaterialTable from "material-table";

export default function ListaGasto() {
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
          { gastos: "Compra", monto: 10 },
          { gastos: "Compra", monto: 10 },
          { gastos: "Compra", monto: 10 },
          { gastos: "Compra", monto: 10 },
          { gastos: "Compra", monto: 10 },
          { gastos: "Compra", monto: 10 },
          { gastos: "Compra", monto: 10 },
          { gastos: "Compra", monto: 10 },
        ]}
        actions={[
          {
            icon: "save",
            tooltip: "Save User",
            onClick: (event, rowData) => alert("You saved " + rowData.name),
          },
          (rowData) => ({
            icon: "delete",
            tooltip: "Delete User",
            onClick: (event, rowData) =>
              alert("You want to delete " + rowData.name),
            disabled: rowData.birthYear < 2000,
          }),
        ]}
        options={{
          actionsColumnIndex: -1,
        }}
      />
    </>
  );
}

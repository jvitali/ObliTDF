import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  InputLabel,
  TextField,
  Typography,
  Select,
  MenuItem,
  FormControl,
  Button,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getRubros } from "../state/actions/rubrosActions";
import { darAltaGasto } from "../state/actions/gastosActions";

const useStyles = makeStyles((theme) => ({
  spacing: {
    marginBottom: theme.spacing(2),
  },
}));

export default function AltaGasto() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [altaGastoData, setAltaGastoData] = useState({
    nombre: "",
    rubro: "",
    monto: "",
  });

  // componentDidMount (lifecyle hook)
  useEffect(() => {
    // dipatch de una accion
    dispatch(getRubros());
  }, [dispatch]);

  const { rubros } = useSelector((state) => state.rubros);

  const handleChange = (e) => {
    // el valor se tiene que guardar en un estado local y eso lo vas a utilizar para hacer un dispatch de una accion que se va a llamar darAltaGastos
    console.log(e.target.value);
    setAltaGastoData({ ...altaGastoData, rubro: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // hacer un dispatch de una accion que se va a llamar por ejemplo darAltaGasto
    // en darAltaGasto pasar lo que tengas en el estado
    dispatch(darAltaGasto(altaGastoData));
  };

  return (
    <>
      <Typography variant="h5">Alta de Gastos</Typography>
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth className={classes.spacing}>
          <TextField
            id="nombre"
            type="text"
            label="Nombre"
            variant="outlined"
            onChange={(e) =>
              setAltaGastoData({ ...altaGastoData, nombre: e.target.value })
            }
          />
        </FormControl>
        <FormControl variant="outlined" fullWidth className={classes.spacing}>
          <InputLabel id="rubro">Rubro</InputLabel>
          <Select
            labelId="rubro"
            id="rubro"
            label="Rubro"
            onChange={handleChange}
            defaultValue=""
          >
            {rubros &&
              rubros.rubros &&
              rubros.rubros.map((rubro) => (
                <MenuItem value={rubro.nombre} key={rubro.id}>
                  {rubro.nombre}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <TextField
            id="monto"
            type="number"
            label="Monto"
            variant="outlined"
          />
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
          size="large"
          className={classes.spacing}
        >
          Aceptar
        </Button>
      </form>
    </>
  );
}

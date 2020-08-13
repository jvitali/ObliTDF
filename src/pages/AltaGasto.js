import React, { useEffect } from "react";
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

const useStyles = makeStyles((theme) => ({
  spacing: {
    marginBottom: theme.spacing(2),
  },
}));

export default function AltaGasto() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRubros());
  }, [dispatch]);

  const { rubros } = useSelector((state) => state.rubros);

  const handleChange = (e) => {
    // el valor se tiene que guardar en un estado local y eso lo vas a utilizar para hacer un dispatch de una accion que se va a llamar darAltaGastos
    console.log(e.target.value);
  };

  return (
    <div>
      <Typography variant="h5">Alta de Gastos</Typography>
      <form>
        <FormControl fullWidth className={classes.spacing}>
          <TextField
            id="nombre"
            type="text"
            label="Nombre"
            variant="outlined"
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
    </div>
  );
}

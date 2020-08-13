import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Loader from "../components/notifications/Loader";
import { login } from "../state/actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

// Material UI usage of theme for consistent spacing base on 8px
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    height: "100vh",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
  },
  button: {
    marginTop: theme.spacing(4),
    height: theme.spacing(6),
  },
}));

export default function Login() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(login(values));
  };

  const { isLoading, isAuthenticated } = useSelector(
    (state) => state.authentication
  );

  if (isAuthenticated) {
    return <Redirect to="/home" />;
  }

  return (
    <Container component="main" maxWidth="xs" className={classes.container}>
      <div className={classes.form}>
        <Typography component="h1" variant="h6" gutterBottom>
          Iniciar sesión
        </Typography>
        <form>
          <Box pb={4}>
            <TextField
              id="email"
              type="email"
              label="Correo electrónico"
              variant="outlined"
              fullWidth
            />
          </Box>
          <Box>
            <TextField
              id="password"
              type="password"
              label="Contraseña"
              variant="outlined"
              fullWidth
            />
          </Box>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            size="large"
            data-cy="submit"
          >
            {isLoading ? <Loader isLoading={true} /> : "Aceptar"}
          </Button>
        </form>
      </div>
    </Container>
  );
}

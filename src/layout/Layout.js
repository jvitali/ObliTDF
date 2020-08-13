import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//import PrivateRoute from "../components/routing/PrivateRoute";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Box } from "@material-ui/core";
import Navbar from "../components/navbar/Navbar";
import AltaGasto from "../pages/AltaGasto";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(6),
    paddingLeft: theme.spacing(14),
  },
}));

function Layout() {
  const classes = useStyles();
  return (
    <>
      <Navbar></Navbar>
      <Container className={classes.container}>
        <Box mt={4}>
          {/*      
          TODO agregar todos los componentes que necesitan autenticacion. Por ejemplo: altaGasto, ComprasRubro, EstadisticaGenerales, etc         
          */}
          <BrowserRouter>
            <Switch>
              <Route path="/alta-gastos" component={AltaGasto} />
            </Switch>
          </BrowserRouter>
        </Box>
      </Container>
    </>
  );
}

export default Layout;

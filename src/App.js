import React from "react";
import "./App.css";

import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import BarComponent from "./components/BarComponent";
import SideBarComponent from "./components/SideBarComponent";
import DashboardComponent from "./components/DashboardComponent";
import AddComponent from "./components/AddComponent";

function App() {
  return (
    <Div>
      <Container maxWidth="xl">
        <BarComponent />
        <Router>
          <Switch>
            <Route path="/" exact>
              <Grid
                container
                direction="row"
                spacing={5}
                justify="space-between"
                alignItems="top"
              >
                <Grid item xs={2}>
                  <SideBarComponent value="home" />
                </Grid>
                <Grid item xs={10}>
                  <DashboardComponent />
                </Grid>
              </Grid>
            </Route>
            <Route path="/analytics">
              <Grid
                container
                direction="row"
                spacing={5}
                justify="space-between"
                alignItems="top"
              >
                <Grid item xs={2}>
                  <SideBarComponent value="analytics" />
                </Grid>
                <Grid item xs={10}>
                  Analytics Component
                </Grid>
              </Grid>
            </Route>
            <Route path="/add">
              <Grid
                container
                direction="row"
                spacing={5}
                justify="space-between"
                alignItems="top"
              >
                <Grid item xs={2}>
                  <SideBarComponent value="add" />
                </Grid>
                <Grid item xs={10}>
                  <AddComponent />
                </Grid>
              </Grid>
            </Route>
          </Switch>
        </Router>
      </Container>
    </Div>
  );
}

export default App;

const Div = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
`;

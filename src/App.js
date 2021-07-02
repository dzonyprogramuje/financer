import React from "react";
import "./App.css";

import styled from "styled-components";

import Container from "@material-ui/core/Container";
import BarComponent from "./components/BarComponent";
import SideBarComponent from "./components/SideBarComponent";

function App() {
  return (
    <Div>
      <Container maxWidth="xl">
        <BarComponent />
        <SideBarComponent />
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

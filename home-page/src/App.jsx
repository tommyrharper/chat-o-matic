import React from "react";
import ReactDOM from "react-dom";
import {
  Container
} from 'shards-react'

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

import "./index.css";

const App = () => (
  <Container>
    <p>This is ANOTHER APP!</p>
    <h1>Chat!</h1>
    <p>This is ANOTHER APP!</p>
  </Container>
);

ReactDOM.render(<App />, document.getElementById("app"));

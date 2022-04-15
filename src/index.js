import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter} from "react-router-dom";
import { InputContectProvider } from "../src/Component/context/inputContext";


// Call make Server

makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <InputContectProvider>
        <App />
      </InputContectProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root"))
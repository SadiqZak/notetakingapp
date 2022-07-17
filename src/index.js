import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/auth-context";
import { ChakraProvider } from "@chakra-ui/react";
import {theme} from "./styles/theme"

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <Router>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

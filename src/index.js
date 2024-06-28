import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  extendTheme,
  ChakraProvider,
  CSSReset,
  ThemeProvider,
} from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import QuizState from "./context/QuizState";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const fonts = {
  body: "Roboto, sans-serif",
  heading: "Roboto, sans-serif",
};

const theme = extendTheme({ colors, fonts });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Router>
        <QuizState>
          <App />
        </QuizState>
        </Router>
      </ThemeProvider>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

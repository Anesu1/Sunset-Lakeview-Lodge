import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyle from "./theme/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./theme/theme";
import { RoomProvider } from "./context";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      
      <RoomProvider>
        <GlobalStyle />
        <App />
      </RoomProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app";
import { StyledEngineProvider } from '@mui/material/styles';
import {ShoppingCard} from "./shopping-cart";
import { ShoppingCardContextComponent } from "./shopping-cart.context";

ReactDOM.render(
  <div style={{ display: "flex", padding: 20 }}>
    <StyledEngineProvider injectFirst>
      <ShoppingCardContextComponent>
        <div style={{ flex: "6" }}>
        <App />
        </div>
        <div style={{ flex: "1", height: "calc(100vh - 56px)", borderLeft: "2px solid #ddd", paddingLeft: "20px" }}>
        <ShoppingCard></ShoppingCard>
        </div>
      </ShoppingCardContextComponent>
    </StyledEngineProvider>
  </div>,
  document.getElementById("root")
);

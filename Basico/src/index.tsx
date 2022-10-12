import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app";
import { NewCompanyContextComponent } from "./list.context";
import { StyledEngineProvider } from '@mui/material/styles';

ReactDOM.render(
  <div>
    <StyledEngineProvider injectFirst>
      <NewCompanyContextComponent>
      <App />
      </NewCompanyContextComponent>
    </StyledEngineProvider>
  </div>,
  document.getElementById("root")
);

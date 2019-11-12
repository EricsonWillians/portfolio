import React, { useState } from "react";
import "./assets/style/main.scss";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { reset, AppBar, Toolbar, Menu, themes } from "react95";
import Synth from "./Synth";
import KnobWrapper from "./Synth/components/KnobWrapper";

const ResetStyles = createGlobalStyle`
  ${reset}
`;

export default function App() {

  const [duration, setDuration] = useState(0);

  return (
    <ThemeProvider theme={themes.default}>
      <AppBar>
        <Toolbar style={{ justifyContent: "space-evenly" }}>
          <KnobWrapper title="Duration" onChange={(value) => {
            setDuration(value);
          }}/>
        </Toolbar>
      </AppBar>
      <div className="main">
        <div className="main-container">
          <p className="app-title">Ericson's Synth</p>
          <Synth duration={duration} />
        </div>
      </div>
    </ThemeProvider>
  );
}

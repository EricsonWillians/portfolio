import React, { useState } from "react";
import styles from "./index.module.scss";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { reset, AppBar, Toolbar, Avatar, Cutout, Menu, themes } from "react95";
import Synth from "./Synth";
import KnobWrapper from "./Synth/components/KnobWrapper";
import avatar from "./assets/img/avatar.jpg";

const ResetStyles = createGlobalStyle`
  ${reset}
`;

export default function App() {
  const [duration, setDuration] = useState(0);

  return (
    <ThemeProvider theme={themes.default}>
      <AppBar>
        <Toolbar style={{ justifyContent: "space-between" }}>
          <Cutout
            style={{
              width: "256px",
              height: "64px",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center"
            }}
          >
            <KnobWrapper
              title="Reverb"
              onChange={value => {
                setDuration(value);
              }}
            />
            <KnobWrapper
              title="Chorus"
              onChange={value => {
                setDuration(value);
              }}
            />
            <KnobWrapper
              title="Volume"
              onChange={value => {
                setDuration(value);
              }}
            />
          </Cutout>
          <Avatar
            style={{
              width: 64,
              height: 64,
              marginRight: 6
            }}
            src={avatar}
          />
        </Toolbar>
      </AppBar>
      <div className={styles.main}>
        <Cutout style={{ width: "auto", marginTop: 128 }}>
          <Synth duration={duration} />
        </Cutout>
      </div>
    </ThemeProvider>
  );
}

import React, { useState } from "react";
import styles from "./index.module.scss";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { reset, AppBar, Toolbar, Avatar, Cutout, themes } from "react95";
import Synth from "./synth";
import InputWrapper from "./synth/components/input-wrapper";
import avatar from "./assets/img/avatar.jpg";

const ResetStyles = createGlobalStyle`
  ${reset}
`;

export default function App() {
  const [decay, setDecay] = useState(0);
  const [preDelay, setPreDelay] = useState(1);
  const [volume, setVolume] = useState(1);

  return (
    <ThemeProvider theme={themes.default}>
      <AppBar>
        <Toolbar style={{ justifyContent: "space-between" }}>
          <Cutout
            style={{
              width: "384px",
              height: "64px",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <InputWrapper
              title="Decay"
              defaultValue={decay}
              onChange={(value) => {
                setDecay(value);
              }}
            />
            <InputWrapper
              title="Pre Delay"
              defaultValue={preDelay}
              onChange={(value) => {
                setPreDelay(value);
              }}
            />
          </Cutout>
          <Avatar
            style={{
              width: 64,
              height: 64,
              marginRight: 6,
            }}
            src={avatar}
          />
        </Toolbar>
      </AppBar>
      <div className={styles.main}>
        <Cutout style={{ width: "auto", marginTop: 128 }}>
          <Synth decay={decay} preDelay={preDelay} volume={volume} />
        </Cutout>
      </div>
    </ThemeProvider>
  );
}

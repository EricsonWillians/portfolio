import React, { useState } from "react";
import styles from "./index.module.scss";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { reset, AppBar, Toolbar, Avatar, Cutout, Menu, themes } from "react95";
import Synth from "./Synth";
import InputWrapper from "./Synth/components/InputWrapper";
import avatar from "./assets/img/avatar.jpg";

const ResetStyles = createGlobalStyle`
  ${reset}
`;

export default function App() {
  const [reverb, setReverb] = useState(0);
  const [chorus, setChorus] = useState(0);
  const [volume, setVolume] = useState(1);

  return (
    <ThemeProvider theme={themes.default}>
      <AppBar>
        <Toolbar style={{ justifyContent: "space-between" }}>
          <Cutout
            style={{
              width: "512px",
              height: "64px",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center"
            }}
          >
            <InputWrapper
              title="Reverb"
              onChange={value => {
                setReverb(value);
              }}
            />
            <InputWrapper
              title="Chorus"
              onChange={value => {
                setChorus(value);
              }}
            />
            <InputWrapper
              title="Volume"
              onChange={value => {
                setVolume(value);
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
          <Synth reverb={reverb} chorus={chorus} volume={volume} />
        </Cutout>
      </div>
    </ThemeProvider>
  );
}

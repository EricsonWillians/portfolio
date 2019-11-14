import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import { Cutout } from "react95";
import { keyTable } from './../../keyTable';

export default function SharpNote({ note, duration, oscillator }) {
    const [triggered, setTriggered] = useState(false);
    useEffect(() => {
      document.addEventListener(
        "keydown",
        event => {
          if (triggered === false) {
            if (event.keyCode === keyTable[note]) {
              setTriggered(true);
            }
          }
        },
        false
      );
      document.addEventListener("keyup", event => {
        if (event.keyCode === keyTable[note]) {
          setTriggered(false);
        }
      });
    }, []);
  
    if (triggered) {
      oscillator.triggerAttack(note);
    } else if (triggered === false) {
      oscillator.triggerRelease(note);
    }
  
    return (
      <div
        className={`${styles.synthSharpNote} ${(() => {
          if (
            note === "D#3" ||
            note === "A#3" ||
            note === "D#4" ||
            note === "A#4"
          ) {
            return styles.synthSharpNoteSeparator;
          }
          return "";
        })()} ${(() => {
          if (triggered) {
            return styles.synthSharpNoteTriggered;
          }
          return "";
        })()}`}
        onMouseDown={() => {
          oscillator.triggerAttackRelease(note, duration);
        }}
        onMouseUp={() => {
          oscillator.releaseAll();
        }}
      />
    );
  }
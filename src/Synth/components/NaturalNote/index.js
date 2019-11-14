import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import { keyTable } from './../../keyTable';

export default function NaturalNote({ note, duration, oscillator }) {
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
        className={`${styles.synthNaturalNote} ${(() => {
          if (triggered) {
            return styles.synthNoteTriggered;
          }
          return "";
        })()}`}
        onMouseDown={() => {
          oscillator.triggerAttack(note);
        }}
        onMouseUp={() => {
          oscillator.releaseAll();
        }}
      />
    );
  }
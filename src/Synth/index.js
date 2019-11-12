import React, { useState, useEffect } from "react";
import Tone from "tone";
import "./index.scss";
import { keyTable } from "./keyTable";

export default function Synth({ duration }) {
  const [naturalNotes, setNaturalNotes] = useState([
    "C3",
    "D3",
    "E3",
    "F3",
    "G3",
    "A3",
    "B3",
    "C4",
    "D4",
    "E4",
    "F4",
    "G4",
    "A4",
    "B4",
    "C5"
  ]);

  const [sharpNotes, setSharpNotes] = useState([
    "C#3",
    "D#3",
    "F#3",
    "G#3",
    "A#3",
    "C#4",
    "D#4",
    "F#4",
    "G#4",
    "A#4"
  ]);

  const [oscillator, setOscillator] = useState(
    new Tone.PolySynth(4, Tone.Synth, {
      oscillator: {
        type: "square"
      }
    }).toMaster()
  );

  return (
    <div className="synth">
      <div className="synth__natural__notes">
        {naturalNotes.map(note => {
          return (
            <NaturalNote
              note={note}
              duration={duration}
              oscillator={oscillator}
            />
          );
        })}
        <div className="synth__sharp__notes">
          {sharpNotes.map(note => {
            return (
              <SharpNote
                note={note}
                duration={duration}
                oscillator={oscillator}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function NaturalNote({ note, duration, oscillator }) {
  const [triggered, setTriggered] = useState(false);
  document.addEventListener(
    "keydown",
    event => {
      if (event.keyCode === keyTable[note]) {
        if (!triggered) {
          oscillator.triggerAttackRelease(note, duration);
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
  useEffect(() => {
    oscillator.releaseAll();
  });
  return (
    <div
      className={`synth__natural__note ${(() => {
        if (triggered) {
          return "synth__note--triggered";
        }
        return "";
      })()}`}
      onClick={() => {
        oscillator.triggerAttackRelease(note, duration);
      }}
    />
  );
}

export function SharpNote({ note, duration, oscillator }) {
  const [triggered, setTriggered] = useState(false);
  document.addEventListener("keydown", event => {
    if (event.keyCode === keyTable[note]) {
      if (!triggered) {
        oscillator.triggerAttackRelease(note, duration);
        setTriggered(true);
      }
    }
  });
  document.addEventListener("keyup", event => {
    if (event.keyCode === keyTable[note]) {
      setTriggered(false);
    }
  });
  useEffect(() => {
    oscillator.releaseAll();
  });
  return (
    <div
      className={`synth__sharp__note ${(() => {
        if (
          note === "D#3" ||
          note === "A#3" ||
          note === "D#4" ||
          note === "A#4"
        ) {
          return "synth__sharp__note--separator";
        }
        return "";
      })()} ${(() => {
        if (triggered) {
          return "synth__note--triggered";
        }
        return "";
      })()}`}
      onClick={() => {
        oscillator.triggerAttackRelease(note, duration);
      }}
    />
  );
}

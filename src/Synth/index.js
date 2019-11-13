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
    new Tone.PolySynth(16, Tone.Synth, {
      oscillator: {
        type: "triangle"
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
      className={`synth__natural__note ${(() => {
        if (triggered) {
          return "synth__note--triggered";
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

export function SharpNote({ note, duration, oscillator }) {
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
      onMouseDown={() => {
        oscillator.triggerAttackRelease(note, duration);
      }}
      onMouseUp={() => {
        oscillator.releaseAll();
      }}
    />
  );
}

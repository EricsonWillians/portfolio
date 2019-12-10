import React, { useState, useEffect } from "react";
import Tone from "tone";
import styles from "./index.module.scss";
import NaturalNote from "./components/NaturalNote";
import SharpNote from "./components/SharpNote";

export default function Synth({ reverb, chorus, volume }) {
  const defaultDuration = 1;

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
        type: "square"
      }
    }).toMaster()
  );

  const [reverbTone, setReverbTone] = useState(
    new Tone.Reverb({
      decay: reverb
    }).toMaster()
  );
  reverbTone.generate().then(() => {});

  return (
    <div className={styles.synth}>
      <div className={styles.synthNaturalNotes}>
        {naturalNotes.map(note => {
          return (
            <NaturalNote
              note={note}
              duration={defaultDuration}
              oscillator={oscillator}
            />
          );
        })}
        <div className={styles.synthSharpNotes}>
          {sharpNotes.map(note => {
            return (
              <SharpNote
                note={note}
                duration={defaultDuration}
                oscillator={oscillator}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

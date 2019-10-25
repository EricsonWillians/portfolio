import React, { Component } from 'react'
import Tone from "tone";
import './Synth.scss'

export default class Synth extends Component {

    constructor(props) {
        super(props);
        this.state = {
            naturalNotes: [
                "C3", "D3", "E3",
                "F3", "G3", "A3", "B3",
                "C4", "D4", "E4",
                "F4", "G4", "A4", "B4",
                "C5"
            ],
            sharpNotes: [
                "C#3", "D#3", "F#3",
                "G#3", "A#3",
                "C#4", "D#4", "F#4",
                "G#4", "A#4",
            ],
            duration: 0.2,
            oscillator: new Tone.Synth().toMaster()
        }

    }

    render() {

        let naturalNotes = [];
        this.state.naturalNotes.map((naturalNote) => {
            naturalNotes.push(
                <div className={`synth__natural__note`} onClick={() => {
                    this.state.oscillator.triggerAttackRelease(naturalNote, this.state.duration)
                }} />
            )
        })

        let sharpNotes = [];
        this.state.sharpNotes.map((sharpNote) => {
            sharpNotes.push(
                <div className={`synth__sharp__note ${(() => {
                    if (
                        sharpNote === "D#3" ||
                        sharpNote === "A#3" ||
                        sharpNote === "D#4" ||
                        sharpNote === "A#4"
                    ) {
                        return "synth__sharp__note--separator"
                    }
                    return ""
                })()}`} onClick={() => {
                    this.state.oscillator.triggerAttackRelease(sharpNote, this.state.duration)
                }} />
            )
        })

        return (
            <div className="synth">
                <div className="synth__natural__notes">
                    {naturalNotes}
                </div>
                <div className="synth__sharp__notes">
                    {sharpNotes}
                </div>
            </div>
        )
    }
}

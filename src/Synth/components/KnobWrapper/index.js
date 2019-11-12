import React, { useState } from "react";
import { Knob } from "react-rotary-knob";
import "./index.scss";

export default function KnobWrapper({ title }) {
  const [value, setValue] = useState(0);
  return (
    <div className="knob-wrapper">
      <Knob onChange={(_value) => {
          setValue(_value);
      }} min={0} max={3} value={value} />
      <p>{title} {value}</p>
    </div>
  );
}

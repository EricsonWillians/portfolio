import React, { useState } from "react";
import { Knob } from "react-rotary-knob";
import styles from "./index.module.scss";

export default function KnobWrapper({ title }) {
  const [value, setValue] = useState(0);
  return (
    <div className={styles.knobWrapper}>
      <Knob onChange={(_value) => {
          setValue(_value);
      }} min={0} max={5} value={value} />
      <p>{title} {value}</p>
    </div>
  );
}

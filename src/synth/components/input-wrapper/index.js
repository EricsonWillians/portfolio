import React, { useState } from "react";
import { NumberField } from "react95";
import styles from "./index.module.scss";

export default function InputWrapper({ title, defaultValue, onChange }) {
  const [value, setValue] = useState(defaultValue);
  return (
    <div className={styles.inputWrapper}>
      <p className={styles.title}>{title}</p>
      <NumberField value={value} width={94} onChange={(_value) => {
          setValue(_value);
          onChange(_value);
      }} />
    </div>
  );
}

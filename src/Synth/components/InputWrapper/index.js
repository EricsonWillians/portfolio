import React, { useState } from "react";
import { NumberField } from "react95";
import styles from "./index.module.scss";

export default function InputWrapper({ title }) {
  const [value, setValue] = useState(0);
  return (
    <div className={styles.inputWrapper}>
      <p className={styles.title}>{title}</p>
      <NumberField value={value} width={94} onChange={(_value) => {
          setValue(_value);
      }} />
    </div>
  );
}

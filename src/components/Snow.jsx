import React from "react";
import styles from "./snow.module.scss";

export default function Snow() {
  const generateNumbers = (amount) => {
    const numbers = [];
    for (let i = 1; i <= amount; i++) {
      numbers.push(i.toString());
    }
    return numbers;
  };

  return (
    <div className={styles.snow}>
      {generateNumbers(1000).map((number, index) => (
        <div
          key={index}
          className={`${styles.snowflake} ${styles[`snowflake--${index}`]}`}>
          ❆
        </div>
      ))}
    </div>
  );
}

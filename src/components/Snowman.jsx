import React from "react";
import styles from "./snowman.module.scss";

export default function Snowman() {
  return (
    <div className={styles.snowman}>
      <div className={styles["snowman__head"]}>
        <div className={styles["snowman__hat"]}></div>
        <div className={styles["snowman__eye--left"]}></div>
        <div className={styles["snowman__eye--right"]}></div>
        <div className={styles["snowman__nose"]}></div>
      </div>
      <div className={styles["snowman__belly"]}>
        <div className={styles["snowman__buttons"]}>
          <div className={styles["snowman__button"]}></div>
          <div className={styles["snowman__button"]}></div>
          <div className={styles["snowman__button"]}></div>
        </div>
      </div>
      <div className={styles["snowman__bottom"]}></div>
    </div>
  );
}

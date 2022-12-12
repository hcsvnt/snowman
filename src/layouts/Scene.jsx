import React from "react";
import "../styles/global.css";
import styles from "./scene.module.scss";

import Snow from "../components/Snow";
import Snowman from "../components/Snowman";

export default function Scene() {
  return (
    <main className={styles.scene}>
      <Snowman />
      <Snow />
    </main>
  );
}

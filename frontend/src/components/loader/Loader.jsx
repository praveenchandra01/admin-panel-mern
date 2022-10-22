import React from 'react'
import styles from "./Loader.module.css"

const Loader = () => {
  return (
    <div class={styles.loaderWrapper}>
      <div class={styles.loader}></div>
    </div>
  );
};

export default Loader
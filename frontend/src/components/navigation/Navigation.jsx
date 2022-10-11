import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <header>
      <div className={styles.navbar}>
        <div className={styles.listItem}>
          <ul>
            <li>
              <Link className={styles.button} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className={styles.button} to="/add">
                Add New 
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

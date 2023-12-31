import React from "react";
import styles from "./Loader.module.scss";
import loaderImg from "../../assets/loader.gif";
import * as ReactDOM from "react-dom";

function Loader() {
  return ReactDOM.createPortal(
    <div className={styles.wrapper}>
      <div className={styles.loader}>
        <img src={loaderImg} alt="Loading..." />
      </div>
    </div>,
    document.getElementById("loader")
  );
}

export default Loader;

import React from "react";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";
import routes from '../../../constants/routes';

const Home = () => {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["title"]}>
        Welcome to the <b>Proton Note Demo</b>
      </div>
      <Link to={routes.NOTES} className={styles["enter-button"]}>
        <div className={styles["logo"]} />
        <div className={styles["description"]}>Enter</div>
      </Link>
    </div>
  );
};

export default Home;

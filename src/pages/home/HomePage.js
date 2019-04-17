import React from "react";
import { Link } from "react-router-dom";
import routes from "../../config/routes";
import styles from "./HomePage.module.css";

const HomePage = () => (
  <div className={styles.wrapper}>
    <Link className={styles.links} to={routes.COMPANIES}>
      <span className={styles.allCompanies}>Всі компанії</span>
    </Link>
    <Link className={styles.links} to={routes.SEARCH}>
      <span className={styles.search}>Пошук</span>
    </Link>
    <Link className={styles.links} to={routes.ADD_COMPANY}>
      <span className={styles.add}>Додати компанію</span>
    </Link>
  </div>
);

export default HomePage;

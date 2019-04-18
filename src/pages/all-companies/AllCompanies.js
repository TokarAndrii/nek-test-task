import React, { Component } from "react";
import styles from "./AllCompanies.module.css";
import allCompaniesList from "../../config/companiesList";

const INITIAL_STATE = {
  current_page: 1,
  total_page: 3,
  arrayPages: [1, 2, 3]
};

class AllCompanies extends Component {
  state = { ...INITIAL_STATE };
  render() {
    const { current_page, total_page, arrayPages } = this.state;
    return (
      <div className={styles.wrapper}>
        <h1>Перелік усіх компаній:</h1>
        <div className={styles.inputsHolder}>
          <label className={styles.label}>
            <span>Відображення</span>
            <select className={styles.input}>
              <option>10</option>
              <option>20</option>
              <option>30</option>
            </select>
            <span>на сторінці</span>
          </label>
          <label className={styles.label}>
            <span>Пошук</span>
            <input className={styles.input} type="text" />
          </label>
        </div>
        <table className={styles.table}>
          <tr className={styles.tr}>
            <th className={styles.th}>Коротке найменування</th>
            <th className={styles.th}>Реєстраційний код</th>
          </tr>
          {allCompaniesList.map(curr => (
            <tr className={styles.tr} key={curr.id}>
              <td className={styles.td}>{curr.nameShort}</td>
              <td className={styles.td}>{curr.reestrKod}</td>
            </tr>
          ))}
        </table>
        <div className={styles.inputsHolderBottom}>
          <span className={styles.inputsHolderBottomPagination}>
            Сторінка {current_page} із {total_page}
          </span>
          <div className={styles.inputsHolderBottomPagination}>
            <span className={styles.prevPaginationText}>Попередня</span>
            {arrayPages.map(curr => (
              <div
                className={
                  curr === current_page
                    ? styles.paginationItemActive
                    : styles.paginationItem
                }
              >
                {curr}
              </div>
            ))}
            <span>Наступна</span>
          </div>
        </div>
      </div>
    );
  }
}

export default AllCompanies;

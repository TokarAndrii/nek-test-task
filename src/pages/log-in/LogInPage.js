import React, { Component } from "react";
import { connect } from "react-redux";
import authUserOperations from "../../redux/authOperations";
import styles from "./LogInPage.module.css";
import authConfig from "../../config/authConfig";
import routes from "../../config/routes";

const INITIAL_STATE = {
  name: "",
  password: "",
  successMessage: "",
  errorMessage: ""
};

class LogInPage extends Component {
  state = { ...INITIAL_STATE };
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { authUser } = this.props;
    const { name, password } = this.state;
    const { user, pass } = authConfig;
    if (name === user && password === pass) {
      authUser(user);
      this.setState({ successMessage: "успішний вхід" });
      const { history } = this.props;
      setTimeout(() => {
        history.push(routes.MAIN);
      }, 1500);
    } else {
      this.setState({ errorMessage: "помилка при авторизації" });
      setTimeout(() => {
        this.setState({ errorMessage: "" });
      }, 1500);
    }
  };
  render() {
    const { name, password, successMessage, errorMessage } = this.state;
    return (
      <div className={styles.wrapper}>
        <form onSubmit={this.handleSubmit} className={styles.form}>
          <label className={styles.row}>
            <div className={styles.label}>ім'я користувача *</div>
            <input
              name="name"
              value={name}
              className={styles.input}
              type="text"
              onChange={this.handleChange}
            />
          </label>
          <label className={styles.row}>
            <div className={styles.label}>пароль *</div>
            <input
              name="password"
              value={password}
              className={styles.input}
              type="password"
              onChange={this.handleChange}
            />
          </label>
          <button className={styles.submitBtn}>Вхід</button>
        </form>
        {successMessage && (
          <div className={styles.successMessage}>{successMessage}</div>
        )}
        {errorMessage && (
          <div className={styles.errorMessage}>{errorMessage}</div>
        )}
      </div>
    );
  }
}

const MDTp = {
  authUser: authUserOperations.authUser
};

export default connect(
  null,
  MDTp
)(LogInPage);

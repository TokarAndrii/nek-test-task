import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import authUserOperations from "../../redux/authOperations";
import HomePage from "../../pages/home/HomePage";
import LogInPage from "../../pages/log-in/LogInPage";
import AllCompanies from "../../pages/all-companies/AllCompanies";
import routes from "../../config/routes";
import selectors from "../../redux/selectors";
import styles from "./App.module.css";
import homeIcon from "../../assets/images/home.svg";
import logOut from "../../assets/images/log-out.svg";
import logIn from "../../assets/images/log-in.svg";

class App extends Component {
  handleLogOutUser = e => {
    e.preventDefault();
    const { logOut } = this.props;
    logOut();
  };
  render() {
    const { user } = this.props;
    return (
      <div className={styles.app}>
        <header className={styles.header}>
          <Link to={routes.MAIN}>
            <img
              className={styles.headerHomeIcon}
              src={homeIcon}
              alt="home-icon"
              width="30"
              height="30"
            />
          </Link>
          <p className={styles.headerTitle}>
            Реєстрація учасників ринку електричної енергії ДП НЕК "УКРЕНЕРГО"
          </p>

          {user && (
            <>
              <span className={styles.headerUserName}>{user}</span>
              <img
                className={styles.headerLogOutIcon}
                src={logOut}
                alt="log-out-icon"
                width="30"
                height="30"
                onClick={this.handleLogOutUser}
              />
            </>
          )}
          {!user && (
            <Link to={routes.LOG_IN}>
              <img
                className={styles.headerLogOutIcon}
                src={logIn}
                alt="log-in-icon"
                width="30"
                height="30"
              />
            </Link>
          )}
        </header>
        <main className={styles.main}>
          <Switch>
            <Route exact path={routes.MAIN} component={HomePage} />
            <Route path={routes.LOG_IN} component={LogInPage} />
            <Route path={routes.COMPANIES} component={AllCompanies} />
          </Switch>
        </main>
        <header className="App-header" />
        <footer className={styles.footer}>
          &copy; 2019 ДП НЕК "УКРЕНЕРГО"
        </footer>
      </div>
    );
  }
}

const MSTp = state => ({
  user: selectors.getUser(state)
});

const MDTp = {
  logOut: authUserOperations.logOutUser
};

export default connect(
  MSTp,
  MDTp
)(App);

# This is test task of Tokar Andrii for NEK Company

## This app is created **using**:

[react](https://reactjs.org/),

[redux](https://redux.js.org/),

[react-router-dom](https://www.npmjs.com/package/react-router-dom),

[redux-thunk](https://www.npmjs.com/package/redux-thunk) (for async redux make)

css - made on [react css modules](https://facebook.github.io/create-react-app/docs/adding-a-css-modules-stylesheet) with using flex-box, adaptive layout - for devices not narrower than 320px

---

## To run this app:

clone this repo;

check if you have installed [Node.js](https://nodejs.org/uk/) version v10.11.0 or higher on your pc;

run following commands:

to install all dependencies:

```

npm install

```

to run locally:

```

npm start

```

open http://localhost:3000/ via your favourite browser to see the results :)

---

##When app is started there are avail:

Routes:

/

- main page

/log-in

- log-in page (LogIn with login: user and password:1234 ,configured at authConfig.js). When you log in first will be shown success message and redirect to main page, where will appear button for log-out and user name. If you type incorrect user name or password it will appear error message.

/all-companies

- all companies table

ALso if you press log-ot button it will log-ot user from system and will appear log-in button

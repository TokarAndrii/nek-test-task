import types from "./types";
const AUTH_USER = user => ({
  type: types.AUTH_USER,
  payload: { user }
});

const LOG_OUT_USER = () => ({
  type: types.LOG_OUT_USER,
  payload: ""
});

export default { AUTH_USER, LOG_OUT_USER };

import types from "./types";
const userAuthReducer = (state = "", { type, payload }) => {
  switch (type) {
    case types.AUTH_USER:
      return payload.user;
    case types.LOG_OUT_USER:
      return payload;
    default:
      return state;
  }
};

export default userAuthReducer;

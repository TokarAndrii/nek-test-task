import authUserActions from "./authUserActions";

const authUser = user => dispatch => {
  dispatch(authUserActions.AUTH_USER(user));
};

const logOutUser = () => dispatch => {
  dispatch(authUserActions.LOG_OUT_USER());
};

export default { authUser, logOutUser };

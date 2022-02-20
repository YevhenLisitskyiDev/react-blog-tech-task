import checkLoginCredentials from "../../helpers/auth/checkLoginCredentials";
import checkRegisterCredentials from "../../helpers/auth/checkRegisterCredentials";
import * as authActionsTypes from "./auth.types";

// -------REGISTER ACTIONS-------

export const registerStarted = () => {
  return {
    type: authActionsTypes.REGISTER,
  };
};

export const registerSuccess = (user) => {
  return {
    type: authActionsTypes.REGISTER_SUCCESS,
    payload: user,
  };
};

export const registerFail = (message) => {
  return {
    type: authActionsTypes.REGISSTER_FAIL,
    payload: message,
  };
};

export const register = (user) => {
  return (dispatch, getState) => {
    const users = getState().auth.users;

    dispatch(registerStarted());

    const { emailIsUnique, phoneNumberIsUnique } = checkRegisterCredentials(
      user,
      users
    );

    if (emailIsUnique && phoneNumberIsUnique) {
      dispatch(registerSuccess(user));
    } else if (!emailIsUnique && !phoneNumberIsUnique) {
      dispatch(
        registerFail(
          "User with this email and phone number already exists. Please choose another ones."
        )
      );
    } else if (!emailIsUnique && phoneNumberIsUnique)
      dispatch(
        registerFail(
          "User with this email already exists. Please choose another email."
        )
      );
    else if (emailIsUnique && !phoneNumberIsUnique)
      dispatch(
        registerFail(
          "User with this phone number already exists. Please choose another phone number."
        )
      );
  };
};

// -------LOGIN ACTIONS-------

export const LoginStarted = () => {
  return {
    type: authActionsTypes.LOGIN,
  };
};

export const LoginSuccess = (user) => {
  return {
    type: authActionsTypes.LOGIN_SUCCESS,
    payload: user,
  };
};

export const LoginFail = (message) => {
  return {
    type: authActionsTypes.LOGIN_FAIL,
    payload: message,
  };
};

export const login = (email, password, users) => {
  return (dispatch) => {
    dispatch(LoginStarted());

    const { loginSuccess, currentUser } = checkLoginCredentials(
      email,
      password,
      users
    );

    loginSuccess
      ? dispatch(LoginSuccess(currentUser))
      : dispatch(LoginFail("Wrong login credentials"));
  };
};

export const logout = () => {
  return {
    type: authActionsTypes.LOGOUT,
  };
};

// -------SET USERS ACTIONS-------

export const FetchUsers = (users) => {
  return {
    type: authActionsTypes.FETCH_USERS,
    payload: users,
  };
};

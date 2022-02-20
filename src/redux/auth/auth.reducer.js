import * as authActionsTypes from "./auth.types";

let currentUser = null;

let users = [];

let INITIAL_STATE = {
  currentUser,
  users,
  message: null,
  loading: false,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // -------REGISTER-------
    case authActionsTypes.REGISTER:
      return {
        ...state,
        loading: true,
        message: null,
      };

    case authActionsTypes.REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
        users: [...state.users, action.payload],
        message: "User registered successfully",
      };

    case authActionsTypes.REGISSTER_FAIL:
      return {
        ...state,
        loading: false,
        message: action.payload,
      };

    // -------LOGIN-------

    case authActionsTypes.LOGIN:
      return {
        ...state,
        loading: true,
        message: null,
      };

    case authActionsTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
        message: "Login successfull!",
      };

    case authActionsTypes.LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        message: action.payload,
      };

    case authActionsTypes.LOGOUT:
      return {
        ...state,
        currentUser: null,
        message: null,
      };

    // -------SET USERS-------

    case authActionsTypes.FETCH_USERS:
      return {
        ...state,
        users: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;

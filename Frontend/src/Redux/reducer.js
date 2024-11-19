import { isLogin, isModal, SET_SEARCH_RESULTS } from "./actionType";

const initState = {
  loginStatus: false,
  modalStatus: false,
  searchResults: null,
};

export const loginReducer = (state = initState, action) => {
  console.log("action", action);
  switch (action.type) {
    case isLogin:
      console.log("isLogin");
      return {
        ...state,
        loginStatus: action.payload,
      };
    case SET_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.payload,
      };
    default:
      return state;
      console.log("default");
  }
};

export const modalReducer = (state = initState, action) => {
  console.log("action", action);
  switch (action.type) {
    case isModal:
      return {
        ...state,
        modalStatus: action.payload,
      };
    default:
      return state;
  }
};

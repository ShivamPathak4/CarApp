import { isLogin, isModal, SET_SEARCH_RESULTS } from "./actionType";

const login = (payload) => ({
  type: isLogin,
  payload,
});

const setModalOpen = (payload) => ({
  type: isModal,
  payload,
});

const setSearchResults = (payload) => ({
  type: SET_SEARCH_RESULTS,
  payload,
});

export { login, setModalOpen, setSearchResults };
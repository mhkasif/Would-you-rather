import * as DATA from "../../Data/_DATA";
import {
  SET_ALL_USERS,
  SET_CURRENT_USER,
  REMOVE_CURRENT_USER,
} from "./UserConstants";
import { loaderStart, loaderEnd } from "../Loader/loaderAction";

const getUsers = (users) => {
  return {
    type: SET_ALL_USERS,
    payload: { users },
  };
};
const setCurrentUser = (user) => {
  return {
    type: SET_CURRENT_USER,
    payload: { currentUser: user },
  };
};
const RemoveCurrentUser = (user) => {
  return {
    type: REMOVE_CURRENT_USER,
  };
};

export const fetchUsersAction = () => async (dispatch) => {
  dispatch(loaderStart());
  const users = await DATA._getUsers();

  await dispatch(getUsers(users));
  dispatch(loaderEnd());
};
export const setCurrentUserAction = (user) => async (dispatch) => {
  await dispatch(setCurrentUser(user));
};

export const signOutAction = () => async (dispatch) => {
  dispatch(RemoveCurrentUser());
};

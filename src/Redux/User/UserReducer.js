import { SET_CURRENT_USER } from "./UserConstants";
import * as DATA from "../../Data/_DATA";
const initialState = {
  users: DATA._getUsers(),
  currentUser: null,
};

const UserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_USER:
      return { ...state, currentUser: payload };

    default:
      return state;
  }
};

export default UserReducer;

import { SET_CURRENT_USER, SET_ALL_USERS, REMOVE_CURRENT_USER } from "./UserConstants";

const initialState = {
  users: [],
  currentUser: null,
};

const UserReducer = (state = initialState, { type, payload }) => {

  switch (type) {
    case SET_CURRENT_USER:
      return { ...state, currentUser: payload.currentUser };
    case REMOVE_CURRENT_USER:
      return { ...state, currentUser: null };
case SET_ALL_USERS:
  return {...state,users:payload.users}
    default:
      return state;
  }
};

export default UserReducer;

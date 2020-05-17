import { LOADER_START, LOADER_END } from "./loaderConstant";

const initialState = {
  isLoading: false,
};
const loaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADER_START:
      return { ...state, isLoading: true };
    case LOADER_END:
      return { ...state, isLoading: false };

    default:
      return state;
  }
};
export default loaderReducer;

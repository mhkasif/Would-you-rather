import { combineReducers } from "redux";
import UserReducer from "./User/UserReducer";
import QuestionReducer from "./Questions/QuestionsReducer";
import loaderReducer from "./Loader/loaderReducer";

var rootReducer = combineReducers({
  users: UserReducer,
  questions: QuestionReducer,
  isLoading: loaderReducer,
});

export default rootReducer;

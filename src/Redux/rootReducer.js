import { combineReducers } from "redux";
import UserReducer from "./User/UserReducer";




var rootReducer = combineReducers({
    users: UserReducer ,

})

export default rootReducer

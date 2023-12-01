import { combineReducers } from "redux";
import usersReducers from "./usersReducers";
import allUserReducer from "./allUserReducer";
import userIdReducer from "./userIdReducer";

export default combineReducers({
    usersReducers,
    allUserReducer,
    userIdReducer,
})




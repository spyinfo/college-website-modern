import {combineReducers} from "redux";
import user from "./user";
import csrf from "./csrf";

const rootReducer = combineReducers({
    user,
    csrf
})

export default rootReducer;

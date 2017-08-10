import {combineReducers} from "redux";
import friendsReducers from "./friendsReducer";

export default combineReducers({
    friends: friendsReducers
});

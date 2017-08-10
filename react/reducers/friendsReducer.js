import {combineReducers} from "redux";
import {GET_USERS_LIST_RESPONSE, GET_USERS_LIST_REQUEST} from "../actions";

import selectedUserReducer from "./selectedUserReducer";

function usersListReducer(state = [], action){
    switch (action.type){
        case GET_USERS_LIST_RESPONSE:
            return [...action.users];
    }
    return state;
}

function isLoadingReducer(state = false, action){

    switch (action.type){
        case GET_USERS_LIST_RESPONSE:
            return false;
        case GET_USERS_LIST_REQUEST:
            return true;
    }
    return state;
}

export default combineReducers({
    usersList: usersListReducer,
    selectedUser: selectedUserReducer,
    isLoading: isLoadingReducer
});

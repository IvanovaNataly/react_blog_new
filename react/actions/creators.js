import * as ACTIONS from "./index";
import UsersService from "../services/UserService";
import PostsService from "../services/PostsService";


export function setPosts(posts){
    return { type: ACTIONS.SET_POSTS, posts };
}

export function getUsersList(usersService = UsersService){
    return dispatch => {
        dispatch( { type: ACTIONS.GET_USERS_LIST_REQUEST} );

        usersService.getAllUsers()
            .then( users => dispatch( { type: ACTIONS.GET_USERS_LIST_RESPONSE, users} ) )
    }
}

export function getUser(id, usersService = UsersService, postsService=PostsService, promise=Promise){
    return dispatch => {
        dispatch( { type: ACTIONS.GET_USER_REQUEST} );

        promise.all([usersService.getUser(id), postsService.getPosts(id)])
            .then( ([user,posts]) => dispatch( { type: ACTIONS.GET_USER_RESPONSE, user, posts} ));
    }
}



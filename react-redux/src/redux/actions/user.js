import {FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_ERROR} from "../types/user";
import axios from "axios";

export const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST,
    }
}

export const fetchUserSuccess = users => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}

export const fetchUserError = error => {
    return {
        type: FETCH_USER_ERROR,
        payload: error
    }
}

export const fetchUsers = () => {
    return async dispatch => {
        dispatch(fetchUserRequest());
        try {
            const {data} = await axios.get('https://jsonplaceholder.typicode.com/users');
            dispatch(fetchUserSuccess(data.length));
        }
        catch (e){
            dispatch(fetchUserError(e.message))
        }
    }
}

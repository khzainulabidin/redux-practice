import {FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_ERROR} from "../types/user";

const initialState = {
    loading: false,
    users: 0,
    error: '',
}

const userReducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case FETCH_USER_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: ''
            }

        case FETCH_USER_ERROR:
            return {
                loading: false,
                users: 0,
                error: action.payload
            }

        default:
            return state;
    }
}

export default userReducer;

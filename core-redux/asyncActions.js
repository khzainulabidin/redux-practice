const axios = require('axios');
const redux = require('redux');
const reduxLogger = require('redux-logger');
const thunkMiddleware = require('redux-thunk').default;

const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger;

// Initial State
const initialState = {
    loading: false,
    users: [],
    error: '',
};

// Actions
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';

// Action creators
const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

const fetchUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUsersError = error => {
    return {
        type: FETCH_USERS_ERROR,
        payload: error
    }
}

// Because of thunk, now we can return function instead of plain object
const fetchUsers = () => {
    return async dispatch => {
        dispatch(fetchUsersRequest());
        try{
            const {data} = await axios.get('https://jsonplaceholder.typicode.com/users');
            const users = data.map(user => user.username);
            dispatch(fetchUsersSuccess(users));
        }
        catch (e){
            dispatch(fetchUsersError(e.message));
        }
    }
}

// Reducer function
const reducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: '',
            }

        case FETCH_USERS_ERROR:
            return {
                loading: false,
                users: [],
                error: action.payload,
            }

        default:
            return state;
    }
}

// Store
const store = createStore(reducer, applyMiddleware(thunkMiddleware, logger()));
store.dispatch(fetchUsers());

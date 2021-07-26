const redux = require('redux');
const reduxLogger = require('redux-logger');

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware =  redux.applyMiddleware;
const logger = reduxLogger.createLogger;

// Initial state of whole app
const initialCakeState = {
    noOfCakes: 10,
};
const initialIceCreamState = {
    noOfIceCreams: 20,
};

// Action
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICE_CREAM = 'BUY_ICE_CREAM';
const buyCake = () => {
    return {
        type: BUY_CAKE
    }
}
const buyIceCream = () => {
    return {
        type: BUY_ICE_CREAM
    }
}

// Reducer
const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type){
        case BUY_CAKE:
            return {
                ...state,
                noOfCakes: state.noOfCakes - 1
            };
        default:
            return state;
    }
}
const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type){
        case BUY_ICE_CREAM:
            return {
                ...state,
                noOfIceCreams: state.noOfIceCreams - 1
            };
        default:
            return state;
    }
}
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
});

// Store
const store = createStore(rootReducer, applyMiddleware(logger()));
/*console.log(`Initial state: ${store.getState().cake.noOfCakes} ${store.getState().iceCream.noOfIceCreams}`);
const unsubscribe = store.subscribe(() => {
    console.log(`Updated state: ${store.getState().cake.noOfCakes} ${store.getState().iceCream.noOfIceCreams}`);
});*/
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
//unsubscribe();

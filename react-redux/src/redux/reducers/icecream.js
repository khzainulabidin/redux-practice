import {BUY_ICE_CREAM} from "../types/icecream";

const initialState = {
    noOfIceCreams: 10,
}

const iceCreamReducer = (state = initialState, action) => {
    switch (action.type){
        case BUY_ICE_CREAM:
            return {
                ...state,
                noOfIceCreams: state.noOfIceCreams - action.payload,
            }

        default:
            return state;
    }
};

export default iceCreamReducer;

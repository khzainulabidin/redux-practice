import {BUY_ICE_CREAM} from "../types/icecream";

export const buyIceCream = (iceCreams = 1) => {
    return {
        type: BUY_ICE_CREAM,
        payload: iceCreams
    }
}

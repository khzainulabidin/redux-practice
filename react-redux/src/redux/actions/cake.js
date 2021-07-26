import {BUY_CAKE} from "../types/cake";

export const buyCake = (cakes = 1) => {
    return {
        type: BUY_CAKE,
        payload: cakes
    }
}

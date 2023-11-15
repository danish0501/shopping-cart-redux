import { ADD_TO_CART, REMOVE_FROM_CART, CHECKOUT } from "./actionType";

export const addToCart = (product) => {

    return {
        type: ADD_TO_CART,
        payload: product
    }
}

export const removeFromCart = (product_id) => {

    return {
        type: REMOVE_FROM_CART,
        payload: product_id
    }
}

export const checkout = () => {

    return {
        type: CHECKOUT
    }
}

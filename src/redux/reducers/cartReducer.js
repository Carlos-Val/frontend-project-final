import {ADD, REMOVE, CLEAN, TOTAL_CART, LOGOUTCART} from '../types/cartTypes.js';

const initialState = {
    cart : [],
    totalCart : 0
};

const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD :
            return {
                ...state,

                cart: [...state.cart, action.payload]
            }
        case REMOVE:
            const numIndex = parseInt(action.payload)
            return {
                ...state,
                cart: [
                    ...state.cart.slice(0, numIndex),
                    ...state.cart.slice(numIndex + 1)
                ]
            }
        
        case LOGOUTCART :
            return initialState
        

        case CLEAN : 
            return {
                ...state,
                cart : action.payload
            }
            

        case TOTAL_CART : 
            return {
                ...state,
                totalCart : action.payload
            }

        default : 
            return state
    }
}

export default cartReducer;
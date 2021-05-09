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
        
        case REMOVE : 
            return {
                ...state,
                cart : action.payload
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
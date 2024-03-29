import {LOGIN, LOGOUT, UPDATE} from '../types/userTypes.js';

const initialState = {
    user: {}
};

const userReducer = (state = initialState, action) =>{
    switch(action.type){
        case LOGIN :
            return{
                ...state,
                user: action.payload
            }
        case LOGOUT :
            return initialState
            
        case UPDATE :
            return{
                ...state,
                user : action.payload
            }
       
        default:
            return state
    }
};

export default userReducer;
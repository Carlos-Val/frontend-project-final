import {combineReducers} from 'redux';
import userReducer from './userReducer.js';
import comicReducer from './comicReducer.js';


const rootReducer = combineReducers({
    userReducer,
    comicReducer
    
});

export default rootReducer;
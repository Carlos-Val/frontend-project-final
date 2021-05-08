import {combineReducers} from 'redux';
import userReducer from './userReducer.js';
import comicReducer from './comicReducer.js';
import saveComicReducer from './saveComicReducer.js';
import cartReducer from './cartReducer.js';


const rootReducer = combineReducers({
    userReducer,
    comicReducer,
    saveComicReducer,
    cartReducer
    
});

export default rootReducer;
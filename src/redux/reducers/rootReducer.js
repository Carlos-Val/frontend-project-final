import {combineReducers} from 'redux';
import userReducer from './userReducer.js';
import comicReducer from './comicReducer.js';
import saveComicReducer from './saveComicReducer';


const rootReducer = combineReducers({
    userReducer,
    comicReducer,
    saveComicReducer
    
});

export default rootReducer;
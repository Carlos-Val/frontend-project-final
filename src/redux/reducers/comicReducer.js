import { SHOW, SEARCH} from '../types/comicTypes.js';

const initialState = {
    comic: [],
    query: []
};

const comicReducer = (state = initialState, action) => {
    switch(action.type){
        case SHOW:
            return {
                ...state,
                comic: action.payload
            }
        case SEARCH:
            return {
                ...state,
                query: action.payload
            }
        default:
            return state
    }
};

export default comicReducer;
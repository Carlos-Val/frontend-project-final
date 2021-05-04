import { SHOWCOUNT, SEARCH, SHOWCOMIC, LOGOUTCOMIC} from '../types/comicTypes.js';

const initialState = {
    comic: [],
    count: []
};

const comicReducer = (state = initialState, action) => {
    switch(action.type){
        case SHOWCOMIC:
            return {
                ...state,
                comic: action.payload
            }
        case SHOWCOUNT:
            return {
                ...state,
                count: action.payload
            }
        case SEARCH:
            return {
                ...state,
                comic: action.payload
            }
        case LOGOUTCOMIC :
            return initialState
    
        default:
            return state
    }
};

export default comicReducer;
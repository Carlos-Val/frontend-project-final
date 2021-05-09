import { SAVE, LOGOUTSAVE} from '../types/saveComicTypes';

const initialState = {
    saveComic: []
};

const rentalReducer = (state = initialState, action) => {
    switch (action.type) {
      case SAVE: 
      return {
        ...state, 
        saveComic: action.payload
      }
      case LOGOUTSAVE :
        return initialState

    
    default:
          return state;
    };
};

export default rentalReducer;
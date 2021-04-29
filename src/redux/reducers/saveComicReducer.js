import { SAVE } from '../types/saveComicTypes';

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
    //   case RENT: 
    //   return {
    //     ...state, 
    //     saveComic: action.payload
    //   }
    default:
          return state;
    };
};

export default rentalReducer;
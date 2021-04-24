import { createStore, compose, applyMiddleware } from 'redux';
import { save, load } from "redux-localstorage-simple";
import rootReducer from './reducers/rootReducer.js';

const createStoreWithMiddleware = applyMiddleware(
    save({state: ['dataUser']}), // Saving done here
)( createStore );

const store = createStoreWithMiddleware(
  rootReducer,
  load( { 
    preloadedState: {
      user:{},
      movie:[]
    },
    state: ['dataUser'] 
  }), // Loading done here
   // eslint-disable-next-line
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({
    trace: true,
     // eslint-disable-next-line
  }) || compose
);

export default store;
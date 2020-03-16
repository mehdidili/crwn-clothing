// import { createStore, applyMiddleware } from 'redux';
import { createStore } from 'redux';
//import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

import rootReducer from './root-reducer';

//const middlewares = [logger];

var logger = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
//if(process.env.NODE_ENV === 'development')
export const store = createStore(rootReducer,
    // applyMiddleware(...middlewares));
    logger);

export const persistor = persistStore(store);

export default { store, persistor };
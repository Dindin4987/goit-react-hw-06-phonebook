// import { createStore } from 'redux';
// import { devToolsEnhancer } from '@redux-devtools/extension';
// import { combineReducers } from 'redux';
import { contactsReducer } from './reducers';
import { filterReducer } from './reducers';
import { configureStore } from '@reduxjs/toolkit';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, persistStore } from 'redux-persist';


// const initialState = {};

// const enhancer = devToolsEnhancer();

// export const store = createStore(rootReducer, enhancer);

// configureStore sets up the enhancer under the hood
// so that we don't need to manually import the devtools enhancer function
//to use the Redux Dev Tools

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
});

export const persistor = persistStore(store);
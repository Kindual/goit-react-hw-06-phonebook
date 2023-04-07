import { configureStore } from '@reduxjs/toolkit';
import contactReducer from "./contactSlice";
import storage from 'redux-persist/lib/storage';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

const persistConfig = {
    key: 'contact',
    storage,
}

const phonebookReducer = persistReducer(persistConfig, contactReducer)

export const store = configureStore({
    reducer: {
        contact: phonebookReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})
export default store;
export const persistor = persistStore(store);
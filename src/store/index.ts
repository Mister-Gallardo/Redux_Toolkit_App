import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter/Counter';
import userReducer from './users/Users';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        users: userReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
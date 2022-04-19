import {combineReducers, createStore} from "@reduxjs/toolkit";
import {userReducer} from "../reducers/userReducer";

const rootReducer = combineReducers({
   user: userReducer,
});

export type RootState = ReturnType<typeof store.getState>


export const store:any = createStore(rootReducer);
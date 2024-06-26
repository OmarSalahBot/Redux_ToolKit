import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './Components/Counter/counterSlice'
import postReducer from "./Components/Posts/postSlice";
export const store = configureStore({
    reducer: {
        counter:counterReducer ,
        post : postReducer
    }
    ,devTools:true
});
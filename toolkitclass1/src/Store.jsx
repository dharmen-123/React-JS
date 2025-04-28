import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./CounterSlice";
const Store= configureStore({
    reducer:{
        mycounter:myReducer

    }
})


export default Store;

import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./colorslice";
const store =  configureStore ({
    reducer:{
        mydark:colorReducer
    }
})

export default store;
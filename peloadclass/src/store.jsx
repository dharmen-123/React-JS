import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./colorslice";
const store =  configureStore ({
    reducer:{
        mycolor:colorReducer
    }
})

export default store;
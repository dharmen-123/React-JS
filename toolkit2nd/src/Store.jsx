import { configureStore } from "@reduxjs/toolkit"
import clrreduce from "./counterslice";
const store= configureStore({
    reducer:{
        mycolor:clrreduce
    }
})

export default store;
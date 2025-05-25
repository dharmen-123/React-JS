import { configureStore } from "@reduxjs/toolkit"
import myreduce from "./Countslice";
import myrcolor from "./Colorslice";
import todoreduce from "./Todoslice";
const store= configureStore({
      reducer:{
        mycounter:myreduce,
        changecolor:myrcolor,
        todo:todoreduce
      }
})

export default store;
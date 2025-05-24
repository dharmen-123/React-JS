import { configureStore } from "@reduxjs/toolkit"
import myreduce from "./Countslice";
import myrcolor from "./Colorslice";
const store= configureStore({
      reducer:{
        mycounter:myreduce,
        changecolor:myrcolor
      }
})

export default store;
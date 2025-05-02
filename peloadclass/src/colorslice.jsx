import { createSlice } from "@reduxjs/toolkit";

const colorslice = createSlice({
    name:"mycolor",
    initialState:{
        work:[]
    },
    reducers:{
        changecolor:(state, actions)=>{
            state.work.push(actions.payload);
        }
    }
})

export const {changecolor} = colorslice.actions;
export default colorslice.reducer;
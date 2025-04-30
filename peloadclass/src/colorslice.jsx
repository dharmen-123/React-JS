import { createSlice } from "@reduxjs/toolkit";

const colorslice = createSlice({
    name:"mycolor",
    initialState:{
        color:"pink"
    },
    reducers:{
        changecolor:(state, actions)=>{
            state.color=actions.payload
        }
    }
})

export const {changecolor} = colorslice.actions;
export default colorslice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const colorSlice = createSlice({
    name:"mycolor",

    initialState:{
        
        color:"yellow"
    },
    reducers:{
        changecolor:(state)=>{
            state.color="red";
        }
    }
})

export const {changecolor}=colorSlice.actions;
export default colorSlice.reducer;
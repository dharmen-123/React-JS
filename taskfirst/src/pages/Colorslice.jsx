import { createSlice } from "@reduxjs/toolkit";


const Colorslice= createSlice({
        name:"changecolor",
        initialState:{
            color:"white"
        },
        reducers:{
            "setcolor":(state, action)=>{
                state.color= action.payload;
            }
    
        }
    }
)
export const { setcolor} = Colorslice.actions;
export default Colorslice.reducer;
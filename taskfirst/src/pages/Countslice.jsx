import { createSlice } from "@reduxjs/toolkit";

const Countslice=createSlice({
    name:"mycounter",
    initialState:{
        count:0
    },
    reducers:{
        "increment":(state)=>{
            state.count++;
        },
        "decrement":(state)=>{
            if(state.count==0){
                alert("Not less than zero")
           }
           else{
            state.count--;
           }
        }
    }
})

export const {increment , decrement } = Countslice.actions;
export default Countslice.reducer;
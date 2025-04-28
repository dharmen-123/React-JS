import { createSlice } from "@reduxjs/toolkit"

const CounterSlice = createSlice({
    name:"mycounter",
    initialState:{
        count:0
    },
    reducers:{
        increment:(state)=>{
            state.count++;
        },

        decrement:(state)=>{
            state.count--;
        }
    }
}) 

export const {increment , decrement} = CounterSlice.actions;
export default CounterSlice.reducer;
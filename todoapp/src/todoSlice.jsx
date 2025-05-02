import { createSlice } from "@reduxjs/toolkit";

const todoSlice= createSlice({
    name:"mytodo",
    initialState:{
        task:[]
    },
    reducers:{
        addTask:(state , actions)=>{
            state.task.push(actions.payload);
        },
        removeTask:(state , actions)=>{
            state.task = state.task.filter(item=>item.id!=actions.payload)
            console.log(actions.payload.id);
            
        },
        removeIDtask:(state,actions)=>{
            state.task.splice(actions.payload.id, 1);
        }
    
    }
})
export const {addTask , removeTask , removeIDtask} = todoSlice.actions;
export default todoSlice.reducer;

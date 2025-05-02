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
            state.task = state.task.filter(key=>key.id!=actions.payload.id);
            // console.log(actions.payload.id);           
        },
        completeTask:(state , actions)=>{
            for (var i=0 ; i<state.task.length;i++){
                if(state.task[i]==actions.payload.id){
                    state.task[i].status=true;
                }
            }
        },
        uncompleteTask:(state , actions)=>{
            for (var i=0 ; i<state.task.length;i++){
                if(state.task[i]==actions.payload.id){
                    state.task[i].status=false;
                }
            }
        }
    
    }
})
export const {addTask , removeTask , uncompleteTask , completeTask} = todoSlice.actions;
export default todoSlice.reducer;

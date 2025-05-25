import { createSlice } from "@reduxjs/toolkit";

const Todoslice = createSlice({
    name:"todo",
    initialState:{
        task:[]
    },

    reducers:{
        addTask:(state, actions)=>{
            state.task.push(actions.payload);
        },
        removeTask:(state, actions)=>{
            state.task=state.task.filter(key=>key.id!=actions.payload.id);
        },
        completeTask:(state, actions)=>{
            for (var i=0; i<state.task.length; i++)
            {
                if (state.task[i].id==actions.payload.id)
                {
                    state.task[i].status=true; 
                }
            }
        },
        IncompleteTask:(state, actions)=>{
            for (var i=0; i<state.task.length; i++)
            {
                if (state.task[i].id==actions.payload.id)
                {
                    state.task[i].status=false;
                }
            }
        },
        editDataSave:(state, actions)=>{
            for (var i=0; i<state.task.length; i++)
            {
                if (state.task[i].id== actions.payload.id)
                {
                    state.task[i].work= actions.payload.work;
                }
            }
        }
    }
})

export const {addTask, removeTask, completeTask, IncompleteTask, editDataSave} = Todoslice.actions;
export default Todoslice.reducer;
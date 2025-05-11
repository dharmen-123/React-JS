import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name :"mycart",
    initialState:{
        cart:[]
    },
    reducers:{
        addToCart:(state, actions)=>{
            const mydata= state.cart.filter(key=>key.id==actions.payload.id);
            if (mydata.length>=1)
            {
                alert("This Product Aleready Added!");
            }
            else 
            {
                state.cart.push(actions.payload);
            }
        },
      qntyInc:(state, actions)=>{
           for (var i=0; i<state.cart.length; i++)
           {
            if (state.cart[i].id==actions.payload.id)
            {
                state.cart[i].qnty++;
            }
           }
      },

      qntyDec:(state, actions)=>{
           for (var i=0; i<state.cart.length; i++)
           {
            if (state.cart[i].id==actions.payload.id)
            {
                if (state.cart[i].qnty<=1)
                {
                   alert("Quantity Not Less Than Zero!");
                }
                else 
                {
                  state.cart[i].qnty--;
                }
            }
           }
      },

      proRemove:(state, actions)=>{
           state.cart= state.cart.filter(item=>item.id!=actions.payload.id);
      }
    }
})
export const {addToCart, qntyInc, qntyDec, proRemove} = cartSlice.actions;
export default cartSlice.reducer;
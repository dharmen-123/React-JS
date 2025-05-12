import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

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
              toast.warning("Product Already added",{
                position:"top-center"
              })

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
                toast.warning("Quantity not less than 1",{
              })
                }
                else 
                {
                  state.cart[i].qnty--;
                }
            }
           }
      },

      proRemove:(state, actions)=>{
        toast.error("Item removed",{
                position:"top-center"
              })
           state.cart= state.cart.filter(item=>item.id!=actions.payload.id);
            
      }
      
    }
})
export const {addToCart, qntyInc, qntyDec, proRemove} = cartSlice.actions;
export default cartSlice.reducer;
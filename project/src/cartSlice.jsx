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
                toast.success("Product  add in your Cart",{
                position:"top-center"
              })
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
        
           state.cart= state.cart.filter(item=>item.id!=actions.payload.id);
         toast.error("Item removed",{
              })    
      }
      
    }
})
export const {addToCart, qntyInc, qntyDec, proRemove} = cartSlice.actions;
export default cartSlice.reducer;
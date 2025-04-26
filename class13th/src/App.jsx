import { useReducer } from "react";
import Render from "./Render";

const App=()=>{
 const myfun=(state ,action)=>{
     switch(action){
      case "Increment":
            return state+1;
      case "Decrement":
         if(state==0){
          alert("Not")
         }
         else{
           return state-1;  
         }
       default :
          return state
     }
 }
  const [count , dispatch] = useReducer(myfun ,0);
  return(
    <>
      <h1>Welcome</h1>
      <button onClick={()=>{dispatch("Increment")}}>Increment</button>
      <h1>{count}</h1>     
      <button onClick={()=>{dispatch("Decrement")}}>Decrement</button>     
      {/* <Render/> */}
    </>
  )
}


export default App;
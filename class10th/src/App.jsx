
import { useState,createContext } from "react";
import Comp1 from "./Comp1";
const myContext=createContext();

const App=()=>{
    const [user , setdata] = useState("Dharmendra");
  return(
    <>
       <h1>Welcome !!! {user}</h1>
        <myContext.Provider value={{user , setdata}}>
        <Comp1 />  
          </myContext.Provider>      
    </>
  )
}
export default App;
export {myContext};
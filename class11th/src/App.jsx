import {useState, useContext } from "react";
import Bhopal from "./Bhopal";
const myContext=createContext();
const App=()=>{
  const [name , setname]= useState("Dharmendra")
  return(
    <>
    <h1>Welcome!!!</h1>
  <myContext.Provider value={{name,setname}}>
    <Bhopal/>
  </myContext.Provider>
    </>
  )
}

export default App;
export {myContext};
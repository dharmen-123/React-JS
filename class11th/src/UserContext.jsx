import {useState , createContext} from "react";
const myContext = createContext();

const UserContext=({children})=>{
    const [name , setName]= useState("Dharmendra");
    return(
        <>
        <myContext.Provider value={{name}}>
           {children}
        </myContext.Provider>
        </>
    )
}

export default UserContext;
export {myContext};
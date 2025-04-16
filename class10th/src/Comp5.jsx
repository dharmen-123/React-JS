import { myContext } from "./App";
import {useContext} from "react";
const Comp5=()=>{
    const {user , setdata}= useContext(myContext);
    return(
        <>
        <h1>Component -5</h1>
        <h1>Welcome {user}</h1>
        </>
    )
}

export default Comp5;
import {useContext} from "react";
import { myContext } from "./UserContext";
const Cybrom=()=>{
    const {name}= useContext(myContext);
    return(
        <>
        <h1>Welcome to Cybrom {name}</h1>
        
        </>
    )
}

export default Cybrom;
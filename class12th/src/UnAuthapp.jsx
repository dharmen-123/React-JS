import {useContext, useState} from "react";
import { myContext } from "./LoginContext";

const UnAuthapp=()=>{
    const [text , setText] = useState("");
    const {Login}= useContext(myContext);

    return(
        <>
        Enter name: <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}}/>

        <button onClick={()=>{Login(text)}}>Login</button>
        
        </>
    )
}

export default UnAuthapp;
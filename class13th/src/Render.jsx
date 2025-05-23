import { useEffect, useRef, useState } from "react";

const Render=()=>{
   const [name , setName]=useState("");
   const cntRef=useRef(0);
  useEffect(()=>{
    cntRef.current=cntRef.current+1;
  })


    return(
        <>
        Enter Your name: <input type="text"  value={name}  
        onChange={(e)=>{setName(e.target.value)}}/>
         <h1>My Render count : {cntRef} </h1>

        </>
    )
}

export default Render;
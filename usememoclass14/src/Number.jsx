import { useState, useMemo } from "react";

const Number=()=>{
    const [mynum , setNum ] =useState("")
    const [myname , setName]=useState("")

       function myMulti(){
        for(var i=0; i<100000000;i++){}
        return mynum*2;
       }
    return(
        <>
        <h1>Number</h1>
         Select No :<input type="number" value={mynum} onChange={(e)=>{setNum(e.target.value)}}/>
         Enter Name :<input type="text" value={myname} onChange={(e)=>{setName(e.target.value)}}/>
        <h1>Multiplication :{myMulti()}</h1>
        </>
    )
}

export default Number;
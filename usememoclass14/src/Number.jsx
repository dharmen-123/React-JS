import { useState, useMemo } from "react";

const Number=()=>{
    const [mynum , setNum]=usestate("")
    const [myname , setName]=usestate("")

       function myMulti(){
        for(var i=0; i<10000000;i++){}
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
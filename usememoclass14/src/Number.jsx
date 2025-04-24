import { useState, useMemo } from "react";

const Number=()=>{
    const [mynum , setNum]=usestate("")
    const [myname , setName]=usestate("")

    return(
        <>
        <h1>Number</h1>
        <input type="number" value={mynum} onChange={(e)=>{e.target.value}}/>
        <h1>Multiplication :{}</h1>
        </>
    )
}

export default Number;
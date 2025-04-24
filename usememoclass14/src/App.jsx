import { useState , useMemo } from "react";

const App=()=>{

  const [add ,setadd]=useState(0);
  const [sub ,setsub]=useState(100);
  const myMulti = useMemo(()=>{
    console.log("#######");
    return add*2;
  },[add]);
  return(
    <>
    <h1>Addition : {add}</h1>
    <button onMouseEnter={()=>{setadd(add+1)}}>Addition</button>
    <h1>Subtraction : {sub}</h1>
    <button onClick={()=>{setsub(sub-1)}}>Subtraction</button>
    <hr />
    <h1>Multiplication : {myMulti}</h1>
    
    </>
  )
}

export default App;

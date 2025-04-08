import { useState } from "react";

const App=()=>{
  const [cnt , setCnt]  = useState("0")
  const myincre=()=>{
    setCnt(cnt+1)
  }
  const mydecre=()=>{
    if (cnt<1){
      alert("Counter not less than 1")
    }
    else{
      setCnt(cnt-1)
    }
  }

  return(
    <>
    <div id="Counterbox">
     <h1>Counter App:</h1>
     <h1>Count:{cnt}</h1>
     <button onClick={myincre}>Increment</button>
     <button onClick={mydecre}>Dcrement</button> <br/><br />
     <button onClick={()=>{setCnt(0)}} id="reset">Reset</button>
     </div>
    </>
  )
}

export default App;
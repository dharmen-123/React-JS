import { useState, useEffect } from "react";

const App=()=>{
  const [count , setCnt] = useState(0)
  const [multi , setmulti] = useState(0)
  useEffect(()=>{
        setmulti(count*2)
  },[count])
  return(
     <>
      <h1>Hook Example :{count}</h1>   
      <h1>Multiplication :{multi}</h1>   
      <button onClick={()=>{setCnt(count+1) }}>Click here</button>
     </>
  )
}

export default App;
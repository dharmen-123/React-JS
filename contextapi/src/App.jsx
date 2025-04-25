import { useRef } from "react";

const App=()=>{
  const myRef = useRef();
   const myShow=()=>{
    myRef.current.innerHTML="I am Dharmendra";
    myRef.current.style.color="red";
   }
  return(
    <>
     <h1 ref={myRef}>Welcome to Cybrom</h1>
     <button onClick={myShow}>Click here</button>
    </>
  )
}

export default App;

import { useRef } from "react";
import Render from "./Render";

const App=()=>{
  const myRef= useRef("");
  const myFun1=()=>{
        myRef.current.style.border="2px solid black";
        myRef.current.style.width="400px";
        myRef.current.style.height="300px";
        myRef.current.style.textAlign="center";
        myRef.current.style.alignItem="center";
        myRef.current.style.margin="auto";
        myRef.current.style.alignContent="center";
        myRef.current.innerHTML="We learn React JS From Cybrom";
  }
  const myFun2=()=>{
       myRef.current.style.borderRadius="50%";
       myRef.current.style.backgroundColor="yellow";

  }
  const myFun3=()=>{
    myRef.current.style.fontSize="40px";
    myRef.current.style.color="green";

}

  return(
    <>
     <button onClick={myFun1}>Click here</button>
     <button onClick={myFun2}>Click here</button>
     <button onClick={myFun3}>Click here</button>
      <div ref={myRef}>
        Hello Friends;
      </div>
      <Render/>
    </>
  )
}

export default App;
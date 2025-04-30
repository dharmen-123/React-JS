import { useSelector , useDispatch } from "react-redux";
import { changecolor } from "./colorslice";
import { useState } from "react";
const App=()=>{
  const Clr = useSelector(state=>state.mycolor.color);
  const dispatch = useDispatch();
  const [text , settext]=useState("");
  return(
    <>
     <h1>Welocome</h1>
     Enter color: <input type="text" value={text} 
     onChange={(e)=>{settext(e.target.value)}}
      />
      <button onClick={()=>{dispatch(changecolor(text))}}>Click</button>
      <br /><br />
      <div style={{width:"200px",height:"200px" , backgroundColor:Clr}}>

      </div>
    </>
  )
}


export default App;
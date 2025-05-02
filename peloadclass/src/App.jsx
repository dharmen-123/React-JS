import { useSelector , useDispatch } from "react-redux";
import { changecolor } from "./colorslice";
import { useState } from "react";
const App=()=>{
  // const Clr = useSelector(state=>state.mycolor.color);
  const data= useSelector(state=>state.mydark.work);
  const dispatch = useDispatch();
  const [text , settext]=useState("");
let sno=0;
const ans=data.map((key)=>{
    sno++;

    return(
      <>
      <tr>
        <td>{sno}</td>
        <td>{key.task}</td>
      </tr>
      </>
    )
})
  return(
    <>
     <h1>Welcome</h1>
      Enter color: <input type="text" value={text} 
       onChange={(e)=>{settext(e.target.value)}}
      />
      <button onClick={()=>{dispatch(changecolor({task:text}))}}>Click</button>
      <br /><br />
      {/* <div style={{width:"200px",height:"200px" , backgroundColor:Clr}}>
      
      </div> */}
      <table>
        <thead>
         <tr>
          <td>#</td>
          <td>list</td>
        </tr>
        </thead>
        <tbody>
        {ans}
        </tbody>
      </table>
    </>
  )
}


export default App;
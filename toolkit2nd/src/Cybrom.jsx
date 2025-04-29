import { useSelector , useDispatch } from "react-redux";
import { changecolor } from "./counterslice";
const Cybrom=()=>{
   const newclr = useSelector(state=>state.mycolor.color);
   const dispatch= useDispatch();

    return(
        <>
         <h1>Welocme to </h1>
         <button onClick={()=>{dispatch(changecolor())}}>Change</button>

         <div style={{width:"400px",height:"400px", backgroundColor:newclr}}>

         </div>
        </>
    )
}

export default Cybrom;
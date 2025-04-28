import {increment , decrement} from "./CounterSlice";
import { useSelector , useDispatch } from "react-redux";

const App=()=>{
    const mycnt = useSelector(state=>state.mycounter.count);
    const dispatch = useDispatch();
  return(
    <>
     <h1>My Counter App :</h1>
     <button onClick={()=>{dispatch(increment())}}>Increment</button>
     <h1>{mycnt}</h1>
     <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
    </>
  )
}

export default App;
import Button from 'react-bootstrap/Button';
import { increment,decrement } from './Countslice';
import { useSelector, useDispatch } from 'react-redux';
const Countertool=()=>{
   const mycount= useSelector(state=>state.mycounter.count);
   const disp= useDispatch();
    return(
        <>
        <br /><br />
        <div style={{alignItems:"center", textAlign:"center", border:"1px solid black", width:"300px", padding:"20px", margin:"auto"}}>
        <h1>Counter App</h1>
          <h1> {mycount}  </h1>
          <span style={{display:"flex",justifyContent:"center" ,gap:"30px"}}> 
         <Button variant="success" onClick={()=>{disp(increment())}}>Increment</Button>
         <Button variant="danger"  onClick={()=>{disp(decrement())}}>Decrement</Button>
        </span>
        </div>
        </>
    )
}

export default Countertool;
import Button from 'react-bootstrap/Button';
import {setcolor } from './Colorslice';
import { useSelector, useDispatch } from 'react-redux';

const Theme=()=>{
    const Clr= useSelector(state=>state.changecolor.color);
   const disp= useDispatch();
   const handleinput=(e)=>{
      disp(setcolor(e.target.value))
   }
    return(
        <>
        <div style={{width:"100%",height:"100vh",backgroundColor:Clr}}>
        <h1 style={{color:"Brown"}}>Change Theme</h1>
        <input type="text" placeholder="Enter any color" 
        onChange={handleinput}/>

        </div>
        </>
    )
}

export default Theme;
import { useReducer } from "react";
import Button from 'react-bootstrap/Button';
const Counter=()=>{
    const myfun=(state,action)=>{
        switch(action){
            case "Increment":
                return state+1
            case "Decrement":
                if(state==0){
                    alert("Not less than zero")
                }
                else{
                    return state-1
                }
        }
    };
    const [count , disp]=useReducer(myfun,0);
    return(
        <>
        <h1>Welcome to My Counter App</h1>
        <div>
             <h1>{count} </h1>
            <Button variant="primary" onClick={()=>{disp("Increment")}}>Increment</Button>
            <Button variant="primary" onClick={()=>{disp("Decrement")}}>Decrement</Button>
             
        </div>
        </>
    )
}

export default Counter;
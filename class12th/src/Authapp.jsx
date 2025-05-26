import {useContext}  from "react"
import {myContext} from "./LoginContext";

const Authapp=()=>{
       const {user ,Logout}=useContext(myContext);
     return(
        <>
          <h2>  Welcome  {user.name} !</h2>
          
          <button onClick={()=>{Logout()}}>Logout</button>
        </>
    )
}

export default Authapp;
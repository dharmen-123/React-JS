import {useContext} from "react"
import {myContext} from "./LoginContext";
import Authapp from "./Authapp";
import UnAuthapp from "./UnAuthapp";

const App=()=>{
  const {user} = useContext(myContext);
  return(
    <>
      <h1>Login System</h1> 
      {user.auth ? <Authapp/> :  <UnAuthapp/>}   
    
    </>
  )
}
export default App;
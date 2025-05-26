import {createContext , useState} from "react";
const myContext = createContext();

const LoginContext=({children})=>{
     const [user , setUser] = useState({name:"", auth:false});

     const Login=(nm)=>{
        setUser({name:nm, auth:true});
     }
     const Logout=()=>{
        setUser({name:"", auth:false});
     }
    return(
        <>
           <myContext.Provider value={{user, Login ,Logout}}>
              {children}
           </myContext.Provider>
        </>
    )
}

export default LoginContext;
export {myContext};
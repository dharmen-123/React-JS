import { myContext } from "./App";
import { useContext } from "react";

const Bhopal=()=>{
    const {name} = useContext(myContext);
    return(
        <>
        <h1>Welcome {name}</h1>
        </>
    )
}
export default Bhopal;
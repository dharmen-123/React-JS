import { useState } from "react";    
import axios from "axios";

const Insert=()=>{
     const [input , setInp]= useState({});
     
     const handleinp=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInp(values=>({...values,[name]:value}));
        console.log(input);
        
     }

    const handlesubmit=async()=>{
        let api="http://localhost:3000/Employe";
        const res = await axios.post(api,input);
        console.log(res);
        alert("Data Saved!!!")
        
    }
    return(
        <>
        <div style={{alignItems:"center"}}>
         <h1>Details Form</h1>
        Enter Name : <input type="text" name="name" onChange={handleinp} />
        <br/>
        Enter Id no. : <input type="text" name="idno" onChange={handleinp} />
        <br/>
        Enter Designation : <input type="text" name="designation" onChange={handleinp} />
        <br/>
        Enter Salary : <input type="text" name="salary" onChange={handleinp} />
        <br/>
        Enter City: <input type="text" name="city" onChange={handleinp} />
        <br/>
       <button onClick={handlesubmit}>Save</button>
       </div>
        </>
    )
}

export default Insert;

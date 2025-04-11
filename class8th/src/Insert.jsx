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
        
         <div style={{alignContent:"center", margin:"auto",textAlign:"center",
            fontSize:"20px",backgroundColor:"skyblue",borderRadius:"20px",width:"400px",height:"400px"  ,border:"2px solid black"}}>
         <h1 align="center">Details Form</h1>

        Enter Name : <input type="text" name="empname" onChange={handleinp} />
        <br/><br/>
        Enter Id no. : <input type="text" name="empno" onChange={handleinp} />
        <br/><br/>
        Enter Designation : <input type="text" name="designation" onChange={handleinp} />
        <br/><br/>
        Enter Salary : <input type="text" name="salary" onChange={handleinp} />
        <br/><br/>
        Enter City: <input type="text" name="city" onChange={handleinp} />
        <br/><br/>
       <button   onClick={handlesubmit}>Save</button>
       </div>
        </>
    )
}

export default Insert;

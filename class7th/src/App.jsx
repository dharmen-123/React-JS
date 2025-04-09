import { useState } from "react";
import axios from "axios";

const App=()=>{
   const [input , setinp]=useState({})

   const handleinp=(key)=>{
      let  name=key.target.name;
      let  value=key.target.value;
     setinp(values=>({...values,[name]:value}))
     console.log(input);
   }
   const handlesubmit=async()=>{
     let api="http://localhost:3000/Form";
     let res= await axios.post(api,input)
     console.log(res);
     alert("succesfull")
     
   }

  return(
   <>
   <h1>Application Form</h1>
   Enter rollno. :<input type="text" name="rollno." onChange={handleinp} />
   <br/><br/>
   Enter name :<input type="text" name="name" onChange={handleinp} />
   <br/><br/>
   Enter fees:<input type="text" name="fees" onChange={handleinp} />
   <br/><br/>
   Enter city:<input type="text" name="city" onChange={handleinp} />
   <br/><br/>
   <button onClick={handlesubmit}>Save</button>
   </>
  )
}
export default App;

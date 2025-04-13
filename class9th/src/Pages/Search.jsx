import { useState } from "react";
import axios from "axios";

const Search=()=>{
    const [mydata , setdata]=useState("");
    const [empid , setemp]=useState([]);
    const handlesubmit=async()=>{
        let api=`http://localhost:3000/Alumini/?empid=${empid}`;
       const response= await axios.get(api);
       setdata(response.data);
    }
    const ans= mydata.map((key)=>{
       return(
        <>
          <h1>{key.name}</h1>
          <h1>{key.empid}</h1>
          <h1>{key.mobile}</h1>
          <h1>{key.designation}</h1>
          <h1>{key.salary}</h1>
          <h1>{key.city}</h1>
        </>
       )
    })
    return(
        <>

        <h1>Welcome to Search Page</h1>
        Enter Alimini ID: <input type="text" value={empid} onChange={(e)=>{setemp(e.target.value)}}/>
        <button onClick={handlesubmit}>Search</button>
        <div >
            {ans}
        </div>
        </>
    )
}

export default Search;
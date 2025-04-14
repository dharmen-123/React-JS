import { useState } from "react";
import axios from "axios";

const Search=()=>{

    const [mydata , setdata]=useState([]);
    const [empid , setemp]=useState("");
    const handlesubmit=async()=>{
        let api=`http://localhost:3000/Alumini/?empid=${empid}`;
       const response= await axios.get(api);
       console.log(response.data);  
       setdata(response.data);
    }
    const ans= mydata.map((key)=>{
       return(
        <>
          <h4>Alumini Name :{key.name}</h4> <hr />
          <h4>ID no. :{key.empid}</h4><hr />
          <h4>Mobile No. :{key.mobile}</h4><hr />
          <h4>Designation :{key.designation}</h4><hr />
          <h4>Monthy Salary :{key.salary}</h4><hr />
          <h4>Working City :{key.city}</h4><hr />
        </>
       )
    })
    return(
        <>
        <h1 align="center">Welcome to Search </h1>
        <div id="searchdata">
        Enter Alimini ID: <input type="text" required value={empid} 
       placeholder="Enter id"  onChange={(e)=>{setemp(e.target.value)}}/>
        <button onClick={handlesubmit}>Search</button><br /><br />
        </div>

        <div className="aluminiS" >
            {ans}
        </div>
        </>
    )
}

export default Search;
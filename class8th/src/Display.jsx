import { useState,useEffect } from "react";
import axios from "axios";

const Display=()=>{
      const [mydata , setdata]= useState([])
      const loadData=async()=>{
        let api = "http://localhost:3000/Employe";
        const respon=await axios.get(api);
        console.log(respon.data);
        setdata(respon.data);
      }
      useEffect(()=>{
        loadData();
      },[]);
    
      const ans = mydata.map((key)=>{
        return(
            <>
              <tr>
                <td>{key.empname}</td>
                <td>{key.empno}</td>
                <td>{key.designation}</td>
                <td>{key.salary}</td>
                <td>{key.city}</td>
              </tr>
            </>
        )
      })
    return(
        <>
        <div >
          <h1>Display Data</h1> <br/>
          <table border="2" cellSpacing="10">
            <tr>
                <th>Emp-name</th>
                <th>Emp-id</th>
                <th>Designation</th>
                <th>Salary</th>
                <th>City</th>
            </tr>
            {ans}
          </table>
          </div>
        </>
    )

}

export default Display;
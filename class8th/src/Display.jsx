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
                <td>{key.Designation}</td>
                <td>{key.Salary}</td>
                <td>{key.City}</td>
              </tr>
            </>
        )
      })
    return(
        <>
          <h1>Display Data</h1> <br/>
          <hr />
          <table>
            <tr>
                <th>Emp-name</th>
                <th>Emp-id</th>
                <th>Designation</th>
                <th>Salary</th>
                <th>City</th>
            </tr>
            {ans}
          </table>
        </>
    )

}

export default Display;
import {useState , useEffect} from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';

const Display=()=>{
      const [mydata , setdata]=useState([]);
      const Loaddata=async()=>{
        let api="http://localhost:3000/Alumini";
        const response = await axios.get(api);
        console.log(response.data);
        setdata(response.data);
      }

      useEffect(()=>{
        Loaddata();
      },[])
       let sno=0;
      const ans = mydata.map((key)=>{
        sno++;
        return(
            <>
            <tr>
                <td>{sno}</td>
                <td>{key.name}</td>
                <td>{key.empid}</td>
                <td>{key.mobile}</td>
                <td>{key.designation}</td>
                <td>{key.salary}</td>
                <td>{key.city}</td>
            </tr>
            </>
        )
      })
    return(
        <>

        <h1 align="center">Display Data</h1>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Sno.</th>
          <th>Alumini Name</th>
          <th>ID No.</th>
          <th>Mobile no.</th>
          <th>Designation</th>
          <th>Salary</th>
          <th>Working City</th>
        </tr>
      </thead>
      <tbody>
        {ans}

        </tbody>
        
        </Table>
        </>
    )
}

export default Display;
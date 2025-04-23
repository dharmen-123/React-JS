import {useState , useEffect} from "react";
import Table from 'react-bootstrap/Table';
import axios from "axios";

const Display=()=>{
     const [mydata , setdata]= useState([]);
     const Loaddata=async()=>{
        let api="http://localhost:3000/Emplyoe";
        const resp=await axios.get(api);
        console.log(resp.data);
        setdata(resp.data);

     }
     useEffect(()=>{
        Loaddata();
     },[])


    let sno=0;
  const ans= mydata.map((key)=>{
       sno++;

       return(
        <>
      <tr>
         <td>{sno}</td>
         <td>{key.empid}</td>
         <td>{key.name}</td>
         <td>{key.designation}</td>
         <td>{key.department}</td>
         <td>{key.basicsalary}</td>
      </tr>
       </>
       )
  }) 
    return(
        <>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>Sno.</th>
          <th>Emp id</th>
          <th>Name</th>
          <th>Designation</th>
          <th>Department</th>
          <th>BasicSalary</th>
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
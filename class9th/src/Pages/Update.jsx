import {useState , useEffect} from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import Table from 'react-bootstrap/Table';
import { MdDelete } from "react-icons/md";

const Update=()=>{
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

    const myDel=async(id)=>{
          let api =`http://localhost:3000/Alumini/${id} `;
          const response = await axios.delete(api);
          console.log(response);
          toast.error("Data successfully delete")
          Loaddata();
    }
    
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
              <td><MdDelete  onClick={()=>{myDel(key.id)}}/></td>
          </tr>
          </>
      )
    })
    return(
        <>
        <h1>Welcome to Update Page</h1>
        <Table striped bordered hover >
      <thead>
        <tr>
          <th>Sno.</th>
          <th>Alumini Name</th>
          <th>ID No.</th>
          <th>Mobile no.</th>
          <th>Designation</th>
          <th>Salary</th>
          <th>Working City</th>
          <th>Delete</th>
        </tr>
        </thead>
        <tbody>
        {ans}
        </tbody>
        </Table>
        <ToastContainer />
        </>
    )
}
export default Update;
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useParams } from "react-router-dom";
import {useState , useEffect} from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const Edit=()=>{
    const {id}=useParams();
     const [editdata , setdata] = useState({});
     
     const loadData=async()=>{
        let api=`http://localhost:3000/Alumini/${id}`;
        const resposne = await  axios.get(api);
        console.log(resposne.data);
        setdata(resposne.data);
       }
     useEffect(()=>{
        loadData();
       }, []);

     const handledata=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setdata(values=>({...values,[name]:value}));
        console.log(editdata);
     }
      
     const handlesubmit=async()=>{
        let api=`http://localhost:3000/Alumini/${id}`;
        const response =await axios.put(api ,editdata);
         console.log(response.data);
       
         toast.warning("Record Update Successfully👍",{    
         })
     }
    return(
        <>
         <Form className="insertform">
         <h3 align="center">Alumini from</h3>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Name :</Form.Label>
        <Form.Control type="text" name="name" value={editdata.name} onChange={handledata} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter ID :</Form.Label>
        <Form.Control type="text" name="empid" value={editdata.empid} onChange={handledata} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Mobile no. :</Form.Label>
        <Form.Control type="text" name="mobile" value={editdata.mobile} onChange={handledata} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Designation:</Form.Label>
        <Form.Control type="text" name="designation" value={editdata.designation} onChange={handledata} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Salary:</Form.Label>
        <Form.Control type="text" name="salary" value={editdata.salary} onChange={handledata} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter City:</Form.Label>
        <Form.Control type="text" name="city" value={editdata.city} onChange={handledata} />
      </Form.Group>
    
      <Button variant="primary" type="button" onClick={handlesubmit} >
        Submit
      </Button>
    </Form>
    <ToastContainer />
        </>
    )
}

export default Edit;
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';


const Insert=()=>{
     const [input , setinp] = useState({});
     const handledata=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setinp(values=>({...values,[name]:value}));
        console.log(input);
     }
      
     const handlesubmit=async(e)=>{
        e.preventDefault();
         let api="http://localhost:3000/Alumini";
         let response = await axios.post(api , input);
        //  console.log(response.data)
        setinp({
            name:"",
            empid:"",
            mobile:"",
            designation:"",
            salary:"",
            city:""
        })
     toast.success("Data Successfully Saved👍")
     }
    return(
        <>
         <Form className="insertform">
         <h3 align="center">Alumini from</h3>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Name :</Form.Label>
        <Form.Control type="text" name="name" value={input.name} onChange={handledata} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter ID :</Form.Label>
        <Form.Control type="text" name="empid" value={input.empid} onChange={handledata} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Mobile no. :</Form.Label>
        <Form.Control type="text" name="mobile" value={input.mobile} onChange={handledata} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Designation:</Form.Label>
        <Form.Control type="text" name="designation" value={input.designation} onChange={handledata} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Salary:</Form.Label>
        <Form.Control type="text" name="salary" value={input.salary} onChange={handledata} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter City:</Form.Label>
        <Form.Control type="text" name="city" value={input.city} onChange={handledata} />
      </Form.Group>
    
      <Button variant="primary" type="submit" onClick={handlesubmit} >
        Submit
      </Button>
    </Form>
    <ToastContainer />
        </>
    )
}


export default Insert;
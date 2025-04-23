import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState } from "react";
import axios from "axios";


const Insert=()=>{
    const [input , setInp]=useState({});
    const handledata=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInp(values=>({...values,[name]:value}));
        console.log(input);
    }

    const handlesubmit=async(e)=>{
       e.preventDefault();
       let api="http://localhost:3000/Details";
       const resp=await axios.post(api,input);
       console.log(resp.data);
       setInp({
        empid:"",
        name:"",
        dsignation:""
       })
    }
    return(
        <>
        <h1>Welcome to Insert page</h1>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Empid</Form.Label>
        <Form.Control type="text" name="empid" value={input.empid} placeholder="Enter id"
        onChange={handledata} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" value={input.name} placeholder="Enter name" 
        onChange={handledata} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicdesignation">
        <Form.Label>Designation</Form.Label>
        <Form.Control type="text" name="designation" value={input.designation} placeholder="Designation" 
        onChange={handledata}/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handlesubmit}>
        Submit
      </Button>
    </Form>
        </>
    )
}


export default Insert;
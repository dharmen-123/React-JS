import {useState} from "react"
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Insert=()=>{
    
    const [input , setinp]=useState({});
    const handledata=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setinp(values=>({...values,[name]:value}));
        console.log(input);
     }
    
    const handleSubmit=async(e)=>{
        e.preventDefault();
        let api = "http://localhost:3000/Emplyoe"
        const resp= await axios.post(api,input)
        setinp({
            empid:"",
            name:"",
            designation:"",
            department:"",
            basicsalary:""
        });
    }
    return(
        <>
        <div  style={{width:"600px", margin:"auto", border:"2px solid  black", padding:"20px"}}>
         <Form >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Emp id:</Form.Label>
        <Form.Control type="text" name="empid" value={input.empid} 
        onChange={handledata}  />
        </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Emp Name</Form.Label>
        <Form.Control type="text" name="name" value={input.name} 
        onChange={handledata}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Designation</Form.Label>
        <Form.Control type="text" name="designation" value={input.designation} 
        onChange={handledata}  />
       </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Department:</Form.Label>
        <Form.Control type="text" name="department" value={input.department} 
        onChange={handledata}  />
        </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Basic Salary:</Form.Label>
        <Form.Control type="text" name="basicsalary" value={input.basicsalary} 
        onChange={handledata}  />
       </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
      </Form>
      </div>
        </>
    )
}

export default Insert;
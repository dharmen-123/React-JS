import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from 'react';
import axios from 'axios';


const Insert=()=>{
     const [input , setinp] = useState({});
     const handledata=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setinp(values=>({...values,[name]:value}));
        console.log(input);
     }


    return(
        <>
         <Form className="insertform">
         <h3 align="center">Alumini from</h3>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Name :</Form.Label>
        <Form.Control type="text" name="name"  onChange={handledata} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter ID :</Form.Label>
        <Form.Control type="text" name="empid" onChange={handledata} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Mobile no. :</Form.Label>
        <Form.Control type="number" name="mobile" onChange={handledata} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Designation:</Form.Label>
        <Form.Control type="text" name="designation" onChange={handledata} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Salary:</Form.Label>
        <Form.Control type="text" name="salary" onChange={handledata} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter City:</Form.Label>
        <Form.Control type="text" name="city" onChange={handledata} />
      </Form.Group>
    
      <Button variant="primary" type="submit" onClick={handlesubmit}>
        Submit
      </Button>
    </Form>
        </>
    )
}

export default Insert;
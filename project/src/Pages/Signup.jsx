import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  
  const navigate= useNavigate();
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.firstName) formErrors.firstName = 'First name is required';
    if (!formData.lastName) formErrors.lastName = 'Last name is required';
    if (!formData.email) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email address is invalid';
    }
    if (!formData.password) formErrors.password = 'Password is required';
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()){
      console.log('Form submitted:', formData);
    }
    navigate("/login")
  };

  return (
     <>
    <br/><br/><br/><br/>
    <div >
    <Container className="Signupfrom">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2>Sign Up</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formFirstName">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                isInvalid={!!errors.firstName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.firstName}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formLastName">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                isInvalid={!!errors.lastName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.lastName}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit">
              Sign Up
            </Button>
          </Form>
          <p>Already registered? <a href="" onClick={()=>{navigate("/login")}} style={{cursor:"pointer"}}>Login</a></p>
        </Col>
      </Row>
    </Container>
    </div>
    <br/>
    </>
  );
};

export default Signup;
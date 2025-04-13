import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from "react-router-dom";
const Topbar=()=>{

    return(
        <>
          <div className="mainnav">
         <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <div id="navbar">
          <Navbar.Brand href="#home">ALUMINI</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home" >Home</Nav.Link> |
            <Nav.Link as={Link} to="insert" >Insert</Nav.Link> |
            <Nav.Link as={Link} to="display" >Display</Nav.Link> |
            <Nav.Link as={Link} to="search" >Search</Nav.Link> |
            <Nav.Link as={Link} to="update" >Update</Nav.Link> |
            <Nav.Link as={Link} to="contact" >Contact</Nav.Link> 
          </Nav>
          </div>
        </Container>
      </Navbar>
          </div> 
        </>
    )
}

export default Topbar;
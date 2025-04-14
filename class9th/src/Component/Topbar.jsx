import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from "react-router-dom";
const Topbar=()=>{

    return(
        <>
        <div id="navbar">
         <Navbar  data-bs-theme="dark">
        <Container>
          <Navbar.Brand id="head"  href="#home">ALUMINI</Navbar.Brand>
          <Nav className="me-auto" >
            <Nav.Link id="link"  as={Link} to="home" >Home</Nav.Link> 
            <Nav.Link id="link"  as={Link} to="insert" >Insert</Nav.Link> 
            <Nav.Link id="link"  as={Link} to="display" >Display</Nav.Link> 
            <Nav.Link id="link"  as={Link} to="search" > Search </Nav.Link> 
            <Nav.Link id="link"  as={Link} to="update" >Update</Nav.Link> 
            <Nav.Link id="link"  as={Link} to="contact" >Contact</Nav.Link> 
          </Nav>
        </Container>
      </Navbar>
      </div>
        </>
    )
}

export default Topbar;
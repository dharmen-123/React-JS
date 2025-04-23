import { Outlet,Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Layout=()=>{
    return(
        <>
            <Navbar bg="dark" data-bs-theme="dark">
        <Container>
         <div id="navbars">
          <Navbar.Brand href="#home">Alumini</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="insert">Insert</Nav.Link>
            <Nav.Link as={Link} to="display">Display</Nav.Link>
            <Nav.Link as={Link} to="update">Update</Nav.Link>
            <Nav.Link as={Link} to="search">Search</Nav.Link>
          </Nav>
         </div>
        </Container>
      </Navbar>
       <hr color="red" />
           <Outlet/>
       <hr color="red" />
       <h1>www.New website@gmail.com</h1>
        </>
    )
}
export default Layout;
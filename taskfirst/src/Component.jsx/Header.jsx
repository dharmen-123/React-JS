import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header=()=>{
    return(
        <>
         <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="counter">Counter App</Nav.Link>
            <Nav.Link as={Link} to="theme">Theme Change APP</Nav.Link>
            <Nav.Link as={Link} to="todo">To-DO List APP</Nav.Link>
            <Nav.Link as={Link} to="contact">Contact Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </>
    )
}

export default Header;
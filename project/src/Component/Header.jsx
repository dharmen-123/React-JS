import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link} from "react-router-dom"
import { FaCartArrowDown } from "react-icons/fa";

const Header=()=>{
    return(
        <>
         <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="brands">Brands</Nav.Link>
            <Nav.Link as={Link} to="shoes">Shoes</Nav.Link>
            <Nav.Link as={Link} to="About">About</Nav.Link>
            <FaCartArrowDown style={{alignItem:"center" , fontSize:"35px" , color:"white"}} />
          </Nav>
        </Container>
      </Navbar>
        </>
    )
}

export default Header;
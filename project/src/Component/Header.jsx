import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link} from "react-router-dom"
import { FaCartArrowDown } from "react-icons/fa";
import weblogo from "../Image/copy.png";

const Header=()=>{
    return(
        <>
         <Navbar>
        <div id="navbar">
        <Container className="navlinks">
          <img src={weblogo} width="200px" height="70px" style={{padding:"2px"}}/>
          <Nav className="me-auto">
            <Nav.Link style={{color:"white"}}  as={Link} to="home">Home</Nav.Link>
            <Nav.Link style={{color:"white"}}  as={Link} to="brands">Brands</Nav.Link>
            <Nav.Link style={{color:"white"}}  as={Link} to="shoes">Shoes</Nav.Link>
            <Nav.Link style={{color:"white"}}  as={Link} to="About">About</Nav.Link>
            </Nav>
            <button>Login</button>
            <FaCartArrowDown style={{alignItem:"center" , fontSize:"35px" , color:"white"}} />
        </Container>
      </div>
      </Navbar>
      
        </>
    )
}

export default Header;
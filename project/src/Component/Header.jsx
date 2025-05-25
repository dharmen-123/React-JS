
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import weblogo from "../Image/copy.png";
import { FaCartArrowDown } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import { Link} from "react-router-dom"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const Header=()=>{ 
    const navigate = useNavigate();
  const cartData= useSelector(state=>state.mycart.cart);
  console.log(cartData);
  const cartLength=cartData.length;

  return(
    <>
    <div id="topbar" >
         <Navbar  expand="lg" className="bg-body-#3d251e">
      <Container style={{display:"flex", justifyContent:"space-between" , width:"100%"}} >
        <img src={weblogo} width="200px" height="60px" style={{}}/>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{color:"white" , backgroundColor:"white"}}/>
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto" style={{color:"white",zIndex:"999", position:"absolute"}}>
            <Nav.Link style={{color:"Orange"}} as={Link} to="home">Home</Nav.Link>
            <Nav.Link style={{color:"Orange"}} as={Link} to="blazer">Blazer</Nav.Link>
            <Nav.Link style={{color:"Orange"}} as={Link} to="shoes">Shoes</Nav.Link>
            <Nav.Link style={{color:"Orange"}} as={Link} to="watches">Watch</Nav.Link>

           {/* <NavDropdown bg="dark"   title=" Collection"  id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="blazer" >Blazer</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="shoes">Shoes</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="watches">Watches</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          
        </Navbar.Collapse>
        <span id="lasticons">
        <Button variant="outline-warning" onClick={()=>{navigate("/login")}}>Login</Button>
        <Button variant="outline-warning" onClick={()=>{}}>Logout</Button>
         <div style={{display:"flex" , justifyContent:"center",margin:"-5px", color:"orange"}}>
         {cartLength }
        <FaCartArrowDown onClick={()=>{navigate("/mycart")}} style={{cursor:"pointer",alignItem:"center" , fontSize:"35px" , color:"white" , marginLeft:"-10px"}} />
        </div>
        </span>
      </Container>
    </Navbar>
    </div>
    </>
  )
}
export default Header;
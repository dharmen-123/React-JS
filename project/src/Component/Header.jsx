import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link} from "react-router-dom"
import { FaCartArrowDown } from "react-icons/fa";
import weblogo from "../Image/copy.png";
import Form from 'react-bootstrap/Form';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header=()=>{
  const navigate = useNavigate();
  const cartData= useSelector(state=>state.mycart.cart);
  console.log(cartData);
  const cartLength=cartData.length;

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
            <Nav.Link style={{color:"white"}}  as={Link} to="blazer">Blazer</Nav.Link>
            <Nav.Link style={{color:"white"}}  as={Link} to="About">About</Nav.Link>
            </Nav>
             <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
            <div id="lasticons">
            <button>Login</button>
             <div style={{display:"flex" , justifyContent:"center",margin:"-5px", color:"orange"}}>
             {cartLength }
            <FaCartArrowDown onClick={()=>{navigate("/mycart")}} style={{cursor:"pointer",alignItem:"center" , fontSize:"35px" , color:"white" , marginLeft:"-10px"}} />
            </div>
            </div>
        </Container>
      </div>
      </Navbar>
      
        </>
    )
}

export default Header;
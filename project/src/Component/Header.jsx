// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { Link} from "react-router-dom"
// import { FaCartArrowDown } from "react-icons/fa";
// import weblogo from "../Image/copy.png";
// import Form from 'react-bootstrap/Form';
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// const Header=()=>{
//   const navigate = useNavigate();
//   const cartData= useSelector(state=>state.mycart.cart);
//   console.log(cartData);
//   const cartLength=cartData.length;

//     return(
//         <>
//          <Navbar>
//         <div id="navbar">
//         <Container className="navlinks">
//           <img src={weblogo} width="200px" height="70px" style={{padding:"2px"}}/>
//           <Nav className="me-auto">
//             <Nav.Link style={{color:"white"}}  as={Link} to="home">Home</Nav.Link>
//             <Nav.Link style={{color:"white"}}  as={Link} to="brands">Brands</Nav.Link>
//             <Nav.Link style={{color:"white"}}  as={Link} to="shoes">Shoes</Nav.Link>
//             <Nav.Link style={{color:"white"}}  as={Link} to="blazer">Blazer</Nav.Link>
//             <Nav.Link style={{color:"white"}}  as={Link} to="About">About</Nav.Link>
//             </Nav>
//              <Form.Control
//               type="text"
//               placeholder="Search"
//               className=" mr-sm-2"
//             />
//             <div id="lasticons">
//             <button>Login</button>
//              <div style={{display:"flex" , justifyContent:"center",margin:"-5px", color:"orange"}}>
//              {cartLength }
//             <FaCartArrowDown onClick={()=>{navigate("/mycart")}} style={{cursor:"pointer",alignItem:"center" , fontSize:"35px" , color:"white" , marginLeft:"-10px"}} />
//             </div>
//             </div>
//         </Container>
//       </div>
//       </Navbar>
      
//         </>
//     )
// }

// export default Header;

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import weblogo from "../Image/copy.png";
import { FaCartArrowDown } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
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
            {/* <span> */}
            <Nav.Link style={{color:"white"}} as={Link} to="home">Home</Nav.Link>
            <Nav.Link style={{color:"white"}} as={Link} to="brands">Brands</Nav.Link>
            <Nav.Link style={{color:"white"}} as={Link} to="shoes">Shoes</Nav.Link>
           {/* </span> */}
          <span id="lasticons">
         <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
        <Button variant="outline-warning">Login</Button>
         <div style={{display:"flex" , justifyContent:"center",margin:"-5px", color:"orange"}}>
         {cartLength }
        <FaCartArrowDown onClick={()=>{navigate("/mycart")}} style={{cursor:"pointer",alignItem:"center" , fontSize:"35px" , color:"white" , marginLeft:"-10px"}} />
        </div>
        </span>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    </>
  )
}
export default Header;
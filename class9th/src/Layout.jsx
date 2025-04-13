import { Outlet } from "react-router-dom";
import Footer from "./Component/Footer";
// import Topbar from "./Component/Topbar";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Layout=()=>{
    return(
        <>
  <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
           <hr />
           <Outlet/>
           <hr />
           <Footer/>
        </>
    )
}

export default Layout;
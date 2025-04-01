import { Link, Outlet } from "react-router-dom";

const Layout=()=>{
    return(
        <>
        <Link to="home">Home</Link> |
        <Link to="about">About us</Link>  |
        <Link to="contact">Contact us</Link>  

        <hr size="2" color="red" />

        < Outlet/>

        <hr size="2" color="red" />
        ww.my wesite.com 
        </>

    )
}
export default Layout;
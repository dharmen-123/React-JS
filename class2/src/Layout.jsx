import { Link, Outlet } from "react-router-dom";

const Layout=()=>{
    return(
        <>
        <Link to="home">Home</Link> |
        <Link to="company">Company</Link> |
        <Link to="product">Product</Link>  |
        <Link to="contact">Contact us</Link>   

        <hr size="2" color="red" />

        < Outlet/>

        <hr size="2" color="red" />
        ww.my wesite.com 
        </>

    )
}
export default Layout;
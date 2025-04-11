import { Link , Outlet } from "react-router-dom"

const Layout=()=>{
    return(
        <>
        <div id="navbar">
        <Link to="home">Home </Link>
        <Link to="insert">Insert </Link>
        <Link to="display">Display </Link>
        </div>
       <hr color="red"/>

       <Outlet/>

       <hr color="red" />
      All rights @ Copyright 2025 www.mywebsite.com
        </>
    )
}

export default Layout;
import { Link , Outlet } from "react-router-dom"

const Layout=()=>{
    return(
        <>
        <Link to="home">Home </Link> |
        <Link to="insert">Insert </Link> |
        <Link to="display">Display </Link>
       
       <hr/>
       
       {Outlet}

       <hr />
      All rights @ Copyright 2025 www.mywebsite.com
        </>
    )
}

export default Layout;
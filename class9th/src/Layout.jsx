import { Outlet } from "react-router-dom";
import Topbar from "./Component/Topbar";
import Footer from "./Component/Footer";

const Layout=()=>{
    return(
        <>
           <Topbar/>
           <br/>
           {/* <hr /> */}
           <Outlet/>
           <hr />
           <Footer/>
        </>
    )
}

export default Layout;
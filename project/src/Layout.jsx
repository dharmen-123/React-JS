import { Outlet } from "react-router-dom"
import Header from "./Component/Header";
import Footer from "./Component/Footer";


const Layout=()=>{
    return(
        <>
          <Header/>
          <hr color="black"/>
          <Outlet/>
          <hr color="black"/>
          <Footer/>
        </>
    )
}


export default Layout;
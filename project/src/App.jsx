import { BrowserRouter, Route , Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import MyCart from "./Pages/Mycart";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Blazer from "./Pages/Blazer";
import Shoes from "./Pages/Shoes";
import Watches from "./Pages/Watches";

const App=()=>{
  return(
    <>
       
       <BrowserRouter>
         <Routes>
           <Route path="/" element={<Layout/>}>
           <Route index element={<Home/>} />
           <Route path="home" element={<Home/>} />
            <Route path="mycart" element={<MyCart/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="signup" element={<Signup/>}/>
           <Route path="blazer" element={<Blazer/>} />
           <Route path="shoes" element={<Shoes/>}/>
           <Route path="watches" element={<Watches/>}/>
           </Route>
         </Routes>
       </BrowserRouter>
    </>
  )
}

export default App;
import { BrowserRouter, Route , Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import MyCart from "./Pages/Mycart";

const App=()=>{
  return(
    <>
       
       <BrowserRouter>
         <Routes>
           <Route path="/" element={<Layout/>}>
           <Route index element={<Home/>} />
           <Route path="home" element={<Home/>} />
            <Route path="mycart" element={<MyCart/>}/>
           {/* <Route path="brands" element={} /> */}
           </Route>
         </Routes>
       </BrowserRouter>
    </>
  )
}

export default App;
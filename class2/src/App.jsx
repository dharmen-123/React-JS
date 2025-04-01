import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";

const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}> 
         <Route path="home" element={<Home/>}/>
         <Route path="about" element={<About/>}/>
         <Route path="contact" element={<Contact/>}/>
       </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
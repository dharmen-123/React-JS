import {BrowserRouter ,  Routes , Route} from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import Display from "./Display";
import Insert from "./Insert";
import Counter from "./Counter";

const App=()=>{
  return(
    <>
      <BrowserRouter>
         <Routes>
           <Route path="/" element={<Layout/>}>
             <Route index element={<Home/>}/>
             <Route path="home" element={<Home/>}/>
             <Route path="about" element={<About/>}/>
             <Route path="insert" element={<Insert/>}/>
             <Route path="display" element={<Display/>}/>
             <Route path="counter" element={<Counter/>}/>
             
           </Route>
        </Routes>
      </BrowserRouter>    
    </>
  )
}
export default App;
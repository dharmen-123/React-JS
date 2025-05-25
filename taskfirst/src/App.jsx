import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Counter from "./pages/Counter";
import Countertool from "./pages/Countertool";
import Theme from "./pages/Theme";
import Contact from "./pages/Contact";
import Todo from "./pages/Todo";


const App=()=>{
  return(
    <>
    <BrowserRouter>
     <Routes>
       <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="counter" element={<Counter/>}/>
        <Route path="toolcounter" element={<Countertool/>}/>
        <Route path="theme" element={<Theme/>}/>
        <Route path="todo" element={<Todo/>}/>
        <Route path="contact" element={<Contact/>}/>
       </Route>
     </Routes>
    </BrowserRouter>
      
    </>
  )
}
export default App;
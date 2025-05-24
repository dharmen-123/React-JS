import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Counter from "./pages/Counter";


const App=()=>{
  return(
    <>
    <BrowserRouter>
     <Routes>
       <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="counter" element={<Counter/>}/>

       </Route>
     </Routes>
    </BrowserRouter>
      
    </>
  )
}
export default App;
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home.jsx";
import Insert from "./Pages/Insert.jsx"
import Display from "./Pages/Display.jsx"
import Search from "./Pages/Search.jsx"
import Update from "./Pages/Update.jsx"
import Contact from "./Pages/Contact.jsx"
import Edit from "./Pages/Edit.jsx"

const App=()=>{
    return(
        <> 
          <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                 <Route index element={<Home/>}/>
                 <Route path="home" element={<Home/>}/>
                 <Route path="insert" element={<Insert/>}/>
                 <Route path="display" element={<Display/>}/>
                 <Route path="search" element={<Search/>}/>
                 <Route path="update" element={<Update/>}/>
                 <Route path="contact" element={<Contact/>}/>
                 <Route path="edit" element={<Edit/>}/>
                </Route>
            </Routes>
          </BrowserRouter>
        </>
    )
}

export default App;
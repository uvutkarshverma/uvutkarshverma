import React from 'react'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import Service from './component/Service'
import Notfound from './component/Notfound'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <>

      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Notfound/>} />
          
          
        </Routes>



      </BrowserRouter>
  
</>
  );
}

export default App;

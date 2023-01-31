import React from 'react'
import Home from './component/Home'
import Notfound from './component/Notfound'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Redirect,
  Switch,
  Router,
} from "react-router-dom";

function App() {
  return (
    <>

<BrowserRouter>

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="*" element={<Notfound/>} />
  
  
</Routes>



</BrowserRouter>
  
</>
  );
}

export default App;

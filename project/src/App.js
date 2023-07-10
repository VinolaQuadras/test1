// import React from 'react'
// import "bootstrap/dist/css/bootstrap.min.css"
// import Home from './Components/Home'
// import Destination from './Components/Destination'
// import Aboutus from './Components/Aboutus'
// import NavBar from './Components/NavBar'
// import{BrowserRouter, Routes, Route} from "react-router-dom"

// function App() {
//   return (
//     <>
//     <BrowserRouter>
//     <NavBar>
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/aboutus" element={<Aboutus />} />
//       <Route path="/destination" element={<Destination />} />
      
//     </Routes>
//     </NavBar>
//     </BrowserRouter>
    
//    </>
//   )
// }

// export default App

// import React from 'react'
// import "bootstrap/dist/css/bootstrap.min.css"

// import Home from './Components/Home';
// import About from './Components/About';
// import Contact from './Components/ContactUs';
// import {BrowserRouter, Routes, Route} from "react-router-dom";
// import Navbar from './Components/Navbar';

import React from 'react'
 import "bootstrap/dist/css/bootstrap.min.css"
 import Home from './Components/Home'
 import Destination from './Components/Destination'
 import Aboutus from './Components/Aboutus'
 import NavBar from './Components/NavBar'
 import{BrowserRouter, Routes, Route} from "react-router-dom"

function App(){
  return(
    <>
    {/* <h1 classname="bg-primary">React</h1>
    <p>This is a paragraph</p> */}
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path ="/" element={<Home/>}/>
      <Route path ="/aboutus" element={<Aboutus/>}/>
      <Route path ="/destination" element={<Destination/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;
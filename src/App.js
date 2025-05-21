import React from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './Test'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Carousel from 'react-bootstrap/Carousel';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import Demo from './Demo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './About';
import CakeNav from './CakeNav';
import Header from './Header';
import Contact from './Contact';
import Blogs from './Blog';
import Pro from './Propss';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
{/* 
<Pro title="Vaibhav" />
<Pro title="Vaibhav" />
<Pro img={logo}/> */}



    {/* <Demo/> */}
    {/* <CakeNav/> */}
    {/* <Test/> */}
   <BrowserRouter>
    <Header/>
   <Routes>
    <Route path='/Home' element={<CakeNav/>}/>
    <Route path='/Blogs' element={<Blogs/>}/>
    <Route path="/About" element={<About/>} />
    <Route path='/Contact' element={<Contact/>}/>

   </Routes>
   </BrowserRouter>

  </>
  );
}

export default App;


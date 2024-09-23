import React from 'react'
import Navbar from './Navbar'
import Home from './Home';
import About from './About';
import Experience from './Experience';
import Footer from './Footer';
import { Toaster } from 'react-hot-toast';
import Project from './Project';
import Contacts from './Contacts';
function App  ()  {
  return (
    <>
    <div>
    <Navbar/>
    <Home/>
    <About/>
    <Experience/>
    <Project/>
    <Contacts/>
    <Footer/>
    
    </div>
    <Toaster/>
    </>
  )
}
export default App;

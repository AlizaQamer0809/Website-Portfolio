
import React,{useState} from 'react'
import Dropdown from './components/Dropdown';
import Navbar from './components/Navbar'
import GlobalStyle from './GlobalStyle';
import Homepage from './page/Homepage';
import Experience from './components/Experience';
import Certificate from './components/Certificate';
import Contact from './components/Contact';
import { Switch, Route } from "react-router-dom";
import Project from './components/Project';
import Hero from './components/Hero';
import {SliderData} from './data/SliderData'
import './App.css'
import Footer from './components/Footer';
function App({history}) {
  
  const[isopen,setopen]=useState(false);
  const toggle=()=>{
    setopen(!isopen)
  }
  return (
    <>
     <Navbar toggle={toggle}/>
    <Dropdown isOpen={isopen}  toggle={toggle}/>
    <GlobalStyle/>
   
   <Switch>
   
   
        <Route exact path="/" component={Homepage} />
        <Route exact path="/projects" component={Project} />
        <Route exact path="/experience" component={Experience} />
        <Route exact path="/certificates" component={Certificate} />
        <Route exact path="/contact" component={Contact} />
       
      
      </Switch>
      <Footer/>
    
   
    </>
  );
}

export default App;

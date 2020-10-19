import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";

function App () {

  return (
    <div className= "grid-container fluid">
    <Navbar/>
    <Intro/>
    <About/>
    <Portfolio/>

    </div>
  )

}


  

export default App;

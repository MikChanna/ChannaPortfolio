import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import project from "./project.json";

function App () {

  return (
    <div className= "grid-container fluid">
    <Navbar/>
    <Intro/>
    <About/>
    {this.state.project.map(item =>(
      <Portfolio
      image={this.item.image}
      detail ={this.item.detail}
      href = {this.item.href}
      technology={this.item.technology}/>
    ))}
    
    <Footer/>

    </div>
  )

}


  

export default App;

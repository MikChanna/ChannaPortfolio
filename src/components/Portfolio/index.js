import React from "react";
import "./style.css";

function Portfolio (){

    return   <section className = "portfolio" id= "portfolio">
    <h1 className = "section__title section__title--portfolio">Portfolio</h1>
    
    <div className="portfolioContainer">
        

          <div className = "section__item--porfolio">
              <img src = {require("../Images/stock.jpg")} alt = "instock demo" className = "section__img--portfolio"/>
             
            <p>Instock is a stock price application that makes it easy for the user to see opening and closing prices for the day.  </p>
            <p className="accent">HTML, CSS, JS</p>
          </div>
          
          <div className = "section__item--porfolio">
            <img src = {require("../Images/BurgerApp.jpg")} alt = "burgerapp demo" className = "section__img--portfolio"/>
          
            <p>Burger app is a simple burger name creator.  A burger name can be created, updated, and deleted.</p>
            <p className="accent">HTML, CSS, JS, NODE.js, MYSQL</p>
          </div>
  
       
        
          <div className = "section__item--porfolio">
            <img src = {require("../Images/jinji.jpg")} alt = "jinji demo" className = "section__img--portfolio"/>
           
            <p>Jinji is an application designed for Human Resource professionals and other leaders in management positions who want to foster a more social, inclusive environment for their employees. </p>
            <p className="accent">HTML, CSS, JS, NODE, MYSQL</p>
          </div>
        </div>
    </section>

}

export default Portfolio;

import React from "react";
import "./style.css";

function About (){

return    <section className = "about" id= "about">
<h1 className = "section__title section__title--about">About Me</h1>
<div className = "section__div section__div--about">
    <img className= "section__img section__img--about" src = {require("../Images/channainwhite.jpg")} alt="Channa no jacket"/>

    <p className = "section__body section__body--about">  I have a background in non-profits with experience in volunteer management where I learned to value transparency and communication.  The design and aesthetics is what I enjoy most about web development, but I've come to appreciate the logic that works behind the webpages.  I've worked on various teams with an assortment of folks so I am prompt and detailed in communication and can work flexibly with others or on my own.  It is my goal to design pages for all types of
        content especially for art, technology, music, and philanthropy.  I am humbly confident, curious, and always
        looking for ways to improve. Click here to view my <a target="_blank" href = "../Images/channa.mik.carlson.resume.pdf">resume.</a> </p>
    

 
</div>
</section>
}


export default About;
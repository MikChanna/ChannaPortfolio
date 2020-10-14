import React from "react";
import "./style.css";

function About (){

return <div className= "grid-x">
  
    <div className="cell large-6">
    <h1 className="about">About Me</h1>
    <img src = {require("../Images/Channa.jpg")}
    className="channa"
    alt="Channa blue background"
          />
    </div>
    <div className = "cell large-6" id="aboutme">
      <p>
      I am a full-stack developer who has a background in non-profits with experience in volunteer management.  The design and aesthetics is what I enjoy most about web development, but I've come to appreciate the logic that works behind the webpages.  I've worked on various teams with an assortment of folks so I am prompt and detailed in communication and can work flexibly with others or on my own.  It is my goal to design pages for all types of
            content especially for art, technology, music, and philanthropy.  I am humbly confident, curious, and always
            looking for ways to improve.  
      </p>
    </div>
</div>
}


export default About;
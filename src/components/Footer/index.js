import React from "react";
import "./style.css";

function Footer () {

    return <footer>
    <div className = "footer__imgdiv">
        <a className="social-list__link" target = "blank" href = "https://www.linkedin.com/in/channamik/"><img className="footer__img" src = "./assets/Images/linkedin.jpeg" id = "contact" alt= "linkedin logo"/></a>
        <a className="social-list__link" target = "blank" href = "https://github.com/MikChanna"><img className="footer__img" src = "./assets/Images/github.png" alt= "github logo"/></a>
     </div>
    <a href="mailto:channa.mik@dgmail.com" className="footer__email">channa.mik@gmail.com</a>

</footer>
}

export default Footer;
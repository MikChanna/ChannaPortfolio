import React from "react";
import "./style.css";

function Footer () {

    return <footer>
    <div className = "footer__imgdiv">
        <a className="social-list__link" target = "blank" href = "https://www.linkedin.com/in/channamik/"><img className="footer__img" src = {require("../Images/linkedin.jpeg")} id = "contact"/></a>
        <a className="social-list__link" target = "blank" href = "https://github.com/MikChanna"><img className="footer__img" src = {require("../Images/github.png")}/></a>
     </div>
    <a href="mailto:channa.mik@dgmail.com" className="footer__email">channa.mik@gmail.com</a>

</footer>
}

export default Footer;
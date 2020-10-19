import React from "react";
import "./style.css";

function Footer () {

    return <footer>
    <div class = "footer__imgdiv">
        <a class="social-list__link"><img class="footer__img" src = {require("../Images/linkedin.jpeg")} id = "contact"/></a>
        <a class="social-list__link"><img class="footer__img" src = {require("../Images/github.png")}/></a>
     </div>
    <a href="mailto:channa.mik@dgmail.com" class="footer__email">channa.mik@gmail.com</a>

</footer>
}

export default Footer;
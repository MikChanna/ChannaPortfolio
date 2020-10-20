import React from 'react';
import "./style.css";

function Project (detail, href, technology, image, name) {

return  <div className = "section__item--porfolio">
<a target="blank" href = {href}><img src = {require(image)} alt = {name} className = "section__img--portfolio"/> </a>

<p>{detail} </p>
<p className="accent">{technology}</p>
</div>

}

export default Project;
import React from 'react';
// import "./style.css";

function ProjectDiv (props) {

let imagePath = "./assets/Images/" + props.image;

console.log(imagePath);



return  <div className = "section__item--porfolio">
<a target="blank" href = {props.href}><img src = {imagePath} alt = {props.name} className = "section__img--portfolio"/> </a>

<p>{props.detail} </p>
<p className="accent">{props.technology}</p>
</div>



}

export default ProjectDiv;
import React, {Component} from "react";
import ProjectDiv from "../ProjectDiv";
import "./style.css";
import projects from "../../projects.json";

class Portfolio extends Component {

  state = {
    projects
  };

  render(){
  return  <section className = "portfolio" id= "portfolio">
    <h1 className = "section__title section__title--portfolio">Portfolio</h1>
    
    <div className="portfolioContainer">
   
   {this.state.projects.map(project => (
    <ProjectDiv
    name = {project.name}
    image = {project.image}
    href = {project.href}
    github = {project.github}
    detail = {project.detail}
    technology = {project.technology}
    />
    ))}

          
    </div>
    </section>
  }
}

export default Portfolio;
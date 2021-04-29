import React from "react"
import "./Project.css"
import styled from "styled-components"
const Project = ({ image, title, description, codeLink, appLink }) => {
  return (
    <div className="card text-center shadow">
      <div className="overflow">
        <img src={image} alt="E-commerce web app" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary">{description}</p>
        <a href={codeLink} className="btn btn-outline-success">
          View Code
        </a>
        <a href={appLink} className="btn btn-outline-success">
          View App
        </a>
        <a href="#" className="btn btn-outline-success">
          Live Demo
        </a>
        <Test>haha</Test>
      </div>
    </div>
  )
}

export default Project

const Test = styled.p`
  padding-top: 20px;
`

import React, { useEffect } from "react"
import Project from "./Project"
import styled from "styled-components"
import image from "../assets/Boubee.png"
import image2 from "../assets/Whatsapp.png"
import image3 from "../assets/Fantasy.png"
import Aos from "aos"
import "aos/dist/aos.css"

const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <ProjectContainer id="projects">
      <Header data-aos="fade-right">Projects</Header>

      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4" data-aos="fade-right">
            <Project
              image={image}
              title={"E-Commerce webapp"}
              description={
                "Fully functional E-Commerce web app using React JS and React Libraries"
              }
              codeLink={"https://github.com/aanup111/Boubee"}
              appLink={"https://boubee-34260.web.app/"}
            />
          </div>
          <div className="col-md-4" data-aos="fade-right">
            <Project
              image={image2}
              title={"Whatsapp clone"}
              description={"Messaging app using React JS and Next JS"}
              codeLink={"https://github.com/aanup111/Whatsapp-clone"}
              appLink={"https://yes-kappa.vercel.app/"}
            />
          </div>
          <div className="col-md-4" data-aos="fade-right">
            <Project
              image={image3}
              title={"Fantasy Basketball"}
              description={
                "Single page application to retrieve and display data from NBA Api"
              }
              codeLink={"https://github.com/aanup111/Fantasy"}
              appLink={"https://fantasy-theta.vercel.app/"}
            />
          </div>
        </div>
      </div>
    </ProjectContainer>
  )
}

export default Projects

const Header = styled.h1`
  text-align: center;
  font-size: clamp(2.5rem, 8vw, 6rem);
  margin-bottom: 13.5rem;
  letter-spacing: 3px;
  font-weight: bold;
  padding: 0 1rem;
  color: white;
  @media screen and (max-width: 1000px) {
    margin-bottom: 6.5rem;
  }
`

const ProjectContainer = styled.div`
  background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
  padding-top: 16rem;
  padding-bottom: 22rem;
  @media screen and (max-width: 1000px) {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
`

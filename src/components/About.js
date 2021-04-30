import React from "react"
import styled from "styled-components"

const About = () => {
  return (
    <AboutContainer id="about">
      <Title>About me</Title>
      <AboutWrapper>
        <AboutSection>
          <MiniTitle>Hello!</MiniTitle>
          My name is Anup Ghimire and I am a passionate Web Developer. I love
          learning and using various web technologies and libraries to build
          amazing products. Recently I have been learning quite a bit of React
          and building multiple projects using React and in the procecess I may
          have fallen in love with React. I find great joy in solving problems,
          learning new languages and technologies and applying those skills in
          real applications.
        </AboutSection>
        <SkillsSection>
          <MiniTitle>Skills</MiniTitle>
          <Skills>
            <SkillTag>Java</SkillTag>
            <SkillTag>C#</SkillTag>
            <SkillTag>PHP</SkillTag>
            <SkillTag>ASP.NET</SkillTag>
          </Skills>
          <Skills>
            <SkillTag>React</SkillTag>
            <SkillTag>Redux</SkillTag>
            <SkillTag>NodeJs</SkillTag>
            <SkillTag>NextJs</SkillTag>
            <SkillTag>jQuery</SkillTag>
          </Skills>
          <Skills>
            <SkillTag>MySQL</SkillTag>
            <SkillTag>IndexDB</SkillTag>
            <SkillTag>MariaDB</SkillTag>
            <SkillTag>MongoDB</SkillTag>
          </Skills>
        </SkillsSection>
      </AboutWrapper>
    </AboutContainer>
  )
}

export default About

const AboutContainer = styled.div`
  background-color: whitesmoke;
  padding-top: 14rem;
  padding-bottom: 22rem;
`

const AboutWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-top: 14rem;
`

const AboutSection = styled.div`
  max-width: 700px;
  min-width: 700px;
  min-height: 400px;
  max-height: 400px;
  letter-spacing: 2px;
  word-spacing: 3px;
`

const SkillsSection = styled.div`
  max-width: 700px;
  min-width: 700px;
  min-height: 400px;
  max-height: 400px;
  letter-spacing: 2px;
  word-spacing: 3px;
`

const Skills = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: left;
  padding-top: 10px;
`

const SkillTag = styled.div`
  background-color: lightgray;
  max-width: 110px;
  min-width: 110px;
  max-height: 50px;
  min-height: 50px;
  border-radius: 3px;
  text-align: center;
  padding-top: 13px;
  padding-left: 10px;
  padding-right: 10px;
`

const Title = styled.h1`
  text-align: center;
  font-size: clamp(2.5rem, 8vw, 6rem);
  margin-bottom: 1.5rem;
  letter-spacing: 5px;
  padding: 0 1rem;
`

const MiniTitle = styled.h1`
  font-size: clamp(1.5rem, 6vw, 3rem);
  margin-bottom: 1.5rem;
  letter-spacing: 3px;
  font-weight: bold;
  padding: 0 1rem;
  text-align: center;
  padding-bottom: 2rem;
`

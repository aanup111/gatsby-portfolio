import * as React from "react"
import { useState } from "react"
import Layout from "../components/layout"
import Main from "../components/Main"
import Projects from "../components/Projects"
import Seo from "../components/seo"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import About from "../components/About"
import Contact from "../components/Contact"
import Dropdown from "../components/Dropdown"
import Header from "../components/header"

const IndexPage = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Layout>
      <Seo title="Home" />
      <Header toggle={toggle} />
      <Main />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <About />
      <Projects />
      <Contact />
    </Layout>
  )
}

export default IndexPage

import * as React from "react"
import Layout from "../components/Layout"
import Main from "../components/Main"
import Projects from "../components/Projects"
import Seo from "../components/Seo"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import About from "../components/About"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Main />

    <About />
    <Projects />
  </Layout>
)

export default IndexPage

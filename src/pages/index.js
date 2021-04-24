import * as React from "react"
import Layout from "../components/Layout"
import Main from "../components/Main"
import Seo from "../components/Seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Main />
  </Layout>
)

export default IndexPage

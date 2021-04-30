import * as React from "react"
import Header from "./Header"
import { GlobalStyle } from "./styles/GlobalStyles"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />

      <main>{children}</main>
    </>
  )
}

export default Layout

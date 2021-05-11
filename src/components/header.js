import * as React from "react"
// import { Link } from "gatsby"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"
import { menuData } from "../data/MenuData"
import { Button } from "./Button"
import { Link } from "react-scroll"
import { useState, useEffect } from "react"

const Header = ({ toggle }) => {
  const [navbar, setNavbar] = useState("none")
  const Nav = styled.nav`
    background: transparent;
    background-color: ${navbar};
    height: 70px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1300px) / 2);
    z-index: 1000;
    position: sticky;
    top: 0;
    transition: 0.9s ease-in-out;
  `

  const changeBackground = () => {
    if (window.scrollY >= 70) {
      setNavbar("black")
    } else {
      setNavbar("none")
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changeBackground)
    return () => window.removeEventListener("scroll", changeBackground)
  }, [])

  return (
    <Nav>
      <Bars onClick={toggle} />
      <div></div>
      <NavMenu>
        {menuData.map((item, index) => (
          <NavLink
            activeClass="active"
            key={index}
            spy={true}
            smooth={true}
            duration={1000}
            delay={300}
            to={item.link}
          >
            {item.title}
          </NavLink>
        ))}
      </NavMenu>
      <NavBtn>
        <Button
          primary="true"
          round="true"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={1000}
          delay={300}
          to="contact"
        >
          Contact
        </Button>
      </NavBtn>
    </Nav>
  )
}

export default Header

const NavLink = styled(Link)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none !important;
  padding: 3rem 3rem;
  height: 100%;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.2rem;
  padding-right: 4rem;
`

const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
    z-index: -1;
  }
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  text-decoration: none !important;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

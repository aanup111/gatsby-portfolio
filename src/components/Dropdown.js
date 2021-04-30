import React from "react"
import styled from "styled-components"
import { menuData } from "../data/MenuData"
import { Link } from "react-scroll"
import { Button } from "./Button"
import { FaTimes } from "react-icons/fa"

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <Container isOpen={isOpen} onClick={toggle}>
      <DropdownWrapper>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <DropdownMenu>
          {menuData.map((item, index) => (
            <DropdownLink
              activeClass="active"
              key={index}
              spy={true}
              smooth={true}
              duration={2000}
              delay={300}
              to={item.link}
              activeClassName="selected"
            >
              {item.title}
            </DropdownLink>
          ))}
        </DropdownMenu>
        <BtnWrap>
          <Button primary="true" round="true" big="true" to="/contact">
            Contact me
          </Button>
        </BtnWrap>
      </DropdownWrapper>
    </Container>
  )
}

export default Dropdown

const Container = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: black;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`

const DropdownWrapper = styled.div``

const DropdownMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
  margin-bottom: 4rem;

  @media screen and (min-width: 480px) {
    grid-template-rows: repeat(4, 60px);
  }
`
const DropdownLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.5rem;
  text-decoration: none !important;
  list-style: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
`
const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
`

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`

const CloseIcon = styled(FaTimes)`
  color: whitesmoke;
`

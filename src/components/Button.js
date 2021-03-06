import styled from "styled-components"
import { Link } from "react-scroll"

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? "#F26A2E" : "#26A0B6")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "16px 40px" : "10px  32px")};
  color: #fff;
  font-size: ${({ big }) => (big ? "20px" : "16px")};
  outline: none;
  border: none;
  min-width: 100px;
  cursor: pointer;
  text-decoration: none !important;
  transition: 0.3s !important;
  border-radius: ${({ round }) => (round ? "50px" : "none")};

  &:hover {
    background: ${({ primary }) => (primary ? "#26A0B6" : "#F26A2E")};
    transform: translateY(-2px);
  }
`

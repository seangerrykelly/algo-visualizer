import styled from "styled-components";
// import { NavLink as Link } from "react-router-dom";

// Styled component named StyledButton
export const NavBar = styled.nav`
  background: white;
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
`;

export const NavHomeLink = styled.a`
  color: green;
  cursor: pointer;
  height: min-content;
  text-decoration: none;
`;

// export const NavLinks = styled
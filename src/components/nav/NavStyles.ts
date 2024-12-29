import styled from "styled-components";
// import { NavLink as Link } from "react-router-dom";
// Colour scheme comes from: https://colorhunt.co/palette/2135553e5879d8c4b6f5efe7


export const NavBar = styled.nav`
  background: #213555;
  font-family: monospace;
  height: 85px;
  display: flex;
  font-size: 18px;
  font-weight: 500;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
`;

export const NavHomeLink = styled.a`
  align-self: center;
  color: #F5EFE7;
  cursor: pointer;
  height: min-content;
  text-decoration: none;
`;

export const NavLinks = styled.ul`
  align-self: center;
  font-size: 14px;
  gap: 24px;
`;

export const NavLink = styled.a`
  align-self: center;
  color: #F5EFE7;
  cursor: pointer;
  height: min-content;
  text-decoration: none;
`;

// export const NavLinks = styled
import styled from "styled-components";
import { Colors } from "../../theme/colors";

export const NavBar = styled.nav`
  background: ${Colors.Blue.primary};
  box-sizing: border-box;
  font-family: monospace;
  height: 100%;
  display: flex;
  font-size: 18px;
  font-weight: 500;
  justify-content: space-between;
  max-height: 100px;
  padding: 0 12px;
  width: 100vw;
  z-index: 12;
`;

export const NavHomeLink = styled.a`
  align-self: center;
  color: ${Colors.Beige.secondary};
  cursor: pointer;
  height: min-content;
  text-decoration: none;
`;

export const NavLinks = styled.ul`
  align-self: center;
  display: flex;
  font-size: 14px;
  gap: 24px;
`;

export const NavLink = styled.a`
  align-self: center;
  color: ${Colors.Beige.secondary};
  cursor: pointer;
  height: min-content;
  text-decoration: none;
`;
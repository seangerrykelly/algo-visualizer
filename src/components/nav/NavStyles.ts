import styled from "styled-components";
import { Colors } from "../../theme/colors";

export const NavBar = styled.nav`
  background: ${Colors.Blue.primary};
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
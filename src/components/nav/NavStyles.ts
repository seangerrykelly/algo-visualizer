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

  @media (min-width: 768px) {
    justify-content: space-around;
  }
`;

export const NavHomeLink = styled.a`
  align-self: center;
  color: ${Colors.Beige.secondary};
  cursor: pointer;
  height: min-content;
  text-decoration: none;
`;

export const NavLinks = styled.ul`
  display: none;
  flex-direction: column;
  gap: 1rem;
  background: ${Colors.Blue.secondary};
  position: absolute;
  right: 0;
  max-width: 200px;
  padding: 1rem;
  border-radius: 8px;

  @media (min-width: 768px) {
    align-self: center;
    background: ${Colors.Blue.primary};
    display: flex;
    flex-direction: row;
    gap: 1rem;
    padding: 0;
    position: relative;
    font-size: 14px;
  }
    
  &.open {
    display: flex;
  }
`;

export const NavLink = styled.a`
  align-self: center;
  color: ${Colors.Beige.secondary};
  cursor: pointer;
  height: min-content;
  text-decoration: none;
`;

export const NavMenuMobileButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  display: block;

  @media (min-width: 768px) {
    display: none;
  }
`;
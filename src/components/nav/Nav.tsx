import { NavBar, NavHomeLink, NavLinks, NavLink } from "./NavStyles"
export const Nav = () => {
    return (
        <NavBar>
            <NavHomeLink href="/">Algorithm Visualizer</NavHomeLink>
            <NavLinks>
                <NavLink href="/sorting">Sorting</NavLink>
            </NavLinks>
        </NavBar>
    )
}
import { NavBar, NavHomeLink, NavLinks, NavLink } from "./NavStyles"
export const Nav = () => {
    return (
        <NavBar>
            <NavHomeLink href="/">Algorithm Visualizer</NavHomeLink>
            <NavLinks>
                <NavLink href="/sorting">Sorting</NavLink>
                <NavLink href="/searching">Searching</NavLink>
            </NavLinks>
        </NavBar>
    )
}
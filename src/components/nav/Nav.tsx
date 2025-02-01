import { useState } from "react"
import { NavBar, NavHomeLink, NavLinks, NavLink, NavMenuMobileButton } from "./NavStyles"
export const Nav = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <NavBar>
            <NavHomeLink href="/">Algorithm Visualizer</NavHomeLink>
            <NavMenuMobileButton onClick={() => setIsOpen(!isOpen)}>☰</NavMenuMobileButton>
            <NavLinks className={isOpen ? "open" : ""}>
                <NavLink href="/sorting">Sorting</NavLink>
                <NavLink href="/searching">Searching</NavLink>
                <NavLink href="/pathfinding">Pathfinding</NavLink>
            </NavLinks>
        </NavBar>
    )
}
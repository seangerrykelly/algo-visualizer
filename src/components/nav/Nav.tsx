import { useEffect, useRef, useState } from "react"
import { NavBar, NavHomeLink, NavLinks, NavLink, NavMenuMobileButton } from "./NavStyles"

export const Nav = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const navLinksRef = useRef<HTMLUListElement>(null)

    const handleClickOutside = (event: MouseEvent) => {
        if (navLinksRef.current && !navLinksRef.current.contains(event.target as Node)) {
            setIsOpen(false)
        }
    }

    useEffect(() => {
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside)
        } else {
            document.removeEventListener("mousedown", handleClickOutside)
        }
        return () => document.removeEventListener("mousedown", handleClickOutside)
    })

    return (
        <NavBar>
            <NavHomeLink href="/">Algorithm Visualizer</NavHomeLink>
            <NavMenuMobileButton onClick={() => setIsOpen(!isOpen)}>☰</NavMenuMobileButton>
            <NavLinks ref={navLinksRef} className={isOpen ? "open" : ""}>
                <NavLink href="/sorting">Sorting</NavLink>
                <NavLink href="/searching">Searching</NavLink>
                <NavLink href="/pathfinding">Pathfinding</NavLink>
            </NavLinks>
        </NavBar>
    )
}
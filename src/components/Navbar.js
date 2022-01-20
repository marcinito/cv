import React from 'react'
import {NavLink} from 'react-router-dom'
function Navbar() {
    return (
        <nav className="nav">
            <ul className="ulNavbar">
              <NavLink to="/"><li className="me">AboutMe</li></NavLink>
              <NavLink to="/contact"><li className="contact">Contact</li></NavLink>
              <NavLink to="credentials"><li className="cred">Credentials</li></NavLink>

            </ul>
        </nav>
    )
}

export default Navbar

import React from 'react'
import {NavLink} from 'react-router-dom'
function Navbar() {
    return (
        <div className="nav">
            <ul className="ul">
              <NavLink to="/"><li className="me">About me</li></NavLink>
              <NavLink to="/contact"><li className="contact">Contact</li></NavLink>
              <NavLink to="credentials"><li className="cred">Credentials</li></NavLink>

            </ul>
        </div>
    )
}

export default Navbar

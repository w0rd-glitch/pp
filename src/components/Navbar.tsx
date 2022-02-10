import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
        <ul>
        <li>
            <NavLink end to='/'>
            <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink end to='/about'>
            <span>About</span>
            </NavLink>
          </li>
          <li>
              <NavLink end to='/experience'>
            <span>Experience</span>
            </NavLink>
          </li>
          <li>
              <NavLink end to='/work'>
            <span>Work</span>
            </NavLink>
          </li>
          <li>
              <NavLink end to='/contact'>
            <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>
  )
}

export default Navbar
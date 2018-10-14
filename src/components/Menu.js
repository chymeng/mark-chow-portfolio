import React from 'react'
import { NavLink } from 'react-router-dom'
import { links } from '../helpers/constants'

const Menu = () => {
  return (
    <div className="menu-container">
      <div className="menu">
        <ul>
          {links.map((x, index) => (
            <li key={index}>
              <NavLink to={x.to} exact activeClassName="active">
                {x.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Menu

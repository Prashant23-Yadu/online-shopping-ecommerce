import React from 'react'
import { NavLink } from 'react-router-dom'

const UsersNavbar = () => {
  return (
    <>
    <ul className="nav-links">
          <li>
            <NavLink to="/userportel/" className="nav-item">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/userportel/products" className="nav-item">
              Products
            </NavLink>
          </li>
          
          <li>
            <NavLink to="/userportel/getAllUsers" className="nav-item">
              Users
            </NavLink>
          </li>

           <li>
            <NavLink to="/userportel/cartitems" className="nav-item">
              Cart Items
            </NavLink>
          </li>

         
          <li>
            <NavLink to="/" className="nav-item logout">
              Logout
            </NavLink>
          </li>
        </ul>


    </>
  )
}

export default UsersNavbar
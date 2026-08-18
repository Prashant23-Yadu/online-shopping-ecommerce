import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminNavbar = () => {
  return (
    <>
    
        <ul className="nav-links">
          <li>
            <NavLink to="/adminportel/" className="nav-item">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/adminportel/products" className="nav-item">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/adminportel/add-product" className="nav-item">
              Add Product
            </NavLink>
          </li>
          <li>
            <NavLink to="/adminportel/getAllUsers" className="nav-item">
              Users
            </NavLink>
          </li>
          <li>
            <NavLink to="/adminportel/addusers" className="nav-item">
              Add User
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

export default AdminNavbar
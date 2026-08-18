// import React from 'react'
// import logo from '../assets/image/logo.png'
// import '../assets/style/navbar.css'
// import { NavLink } from 'react-router-dom'

// const Navbar = () => {
//   return (
//     <>
    

//     <div className="navbar">
//         <div className="logo">
//             <img src={logo} alt="My Online Shop Logo" />
//         </div>

//         <div className="links">
//             <ul>
//                <li><NavLink to={'/adminportel/'}>HOME</NavLink></li>
//                <li><NavLink to={'/adminportel/products'}>PRODUCTS</NavLink></li>
//                <li><a href="">ADD PRODUCTS</a></li>
//                <li><a href=""> USERS </a></li>
//                <li><a href="">ADD USERS</a></li>
//                <li><a href="">LOGOUT</a></li>
//             </ul>
//         </div>

//     </div>


//     </>
//   )
// }

// export default Navbar

 import React from 'react'
import logo from "../assets/image/logo.png";
import "../assets/style/navbar.css";
import { NavLink, useLocation } from "react-router-dom";
import AdminNavbar from "../Components/Admin/AdminNavbar";
import UsersNavbar from "./Users/UsersNavbar";

const Navbar = () => {

  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/adminportel");

  return (
    <nav className="navbar">
      <div className="nav-container">

        <div className="logo">
          <img src={logo} alt="My Online Shop Logo" />
        </div>

        <div className="links">
             {isAdmin ? <AdminNavbar/> : <UsersNavbar/>}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
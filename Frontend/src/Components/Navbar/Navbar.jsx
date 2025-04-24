import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom'; // Correct import

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("home");

  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <li className={menu === "home" ? "active" : ""}> {/* Wrap Link in <li> */}
          <Link to='/' onClick={() => setMenu("home")}>Home</Link>
        </li>
        <li className={menu === "menu" ? "active" : ""}> {/* Wrap <a> in <li> */}
          <a href='#explore-menu' onClick={() => setMenu("menu")}>Menu</a>
        </li>
        <li className={menu === "mobile-app" ? "active" : ""}> {/* Wrap <a> in <li> */}
          <a href='#app-download' onClick={() => setMenu("mobile-app")}>Mobile App</a>
        </li>
        <li className={menu === "contact-us" ? "active" : ""}> {/* Wrap <a> in <li> */}
          <a href='#footer' onClick={() => setMenu("contact-us")}>Contact us</a>
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <img src={assets.basket_icon} alt="" />
        <div className="dot"></div>
        <button onClick={()=>setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  );
}

export default Navbar;
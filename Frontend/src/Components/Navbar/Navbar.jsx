import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom'; // Correct import
import { StoreContext } from '../../Context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");

  const {getTotalCartAmount} = useContext(StoreContext);

  const {token,setToken} = useContext(StoreContext);

  const navigate = useNavigate();

  const logout = ()=>{
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  }

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logoo} alt="" className="logo" /></Link>
      <ul className="navbar-menu">
        <li className={menu === "home" ? "active" : ""}>
          <Link to='/' onClick={() => setMenu("home")}>Home</Link>
        </li>
        <li className={menu === "menu" ? "active" : ""}>
          <a href='#explore-menu' onClick={() => setMenu("menu")}>Menu</a>
        </li>
        <li className={menu === "mobile-app" ? "active" : ""}>
          <a href='#app-download' onClick={() => setMenu("mobile-app")}>Mobile App</a>
        </li>
        <li className={menu === "contact-us" ? "active" : ""}>
          <a href='#footer' onClick={() => setMenu("contact-us")}>Contact us</a>
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
        <div className={getTotalCartAmount() ===0 ? "" : "dot" }></div>
        {!token 
        ?  <button onClick={() => setShowLogin(true)}>Sign in</button> 
        : <div className='navbar-profile'>
            <img src={assets.profile_icon} alt="" srcset="" />
            <ul className="nav-profile-dropdown">
              <li><img src={assets.bag_icon} alt="" srcset="" /><p>Orders</p></li>
              <hr />
              <li onClick={logout}><img src={assets.logout_icon} alt="" srcset="" /><p>Logout</p></li>
            </ul>
          </div>}
       
      </div>
    </div>
  );
}

export default Navbar;

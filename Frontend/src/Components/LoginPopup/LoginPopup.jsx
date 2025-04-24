import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

    const[currentState,setCurrentState] = useState("Sign up")
  return (
    <div>
      <form className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currentState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-input">
          {currentState === "Login" ? <></> : <input type="text" placeholder='Your name' required />}
          
          <input type="email" placeholder='Your email' required />
          <input type="password" placeholder='Your password' required />
        </div>
        <button>{currentState==="Sign up" ? "Create Account" : "Login"}</button>
      </form>
    </div>
  )
}

export default LoginPopup

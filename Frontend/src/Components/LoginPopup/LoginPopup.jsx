import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

    const[currentState,setCurrentState] = useState("Sign up")
  return (
    <div className='login-popup'>
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
        <div className="login-popup-condition">
          <input type='checkbox' required/>
          <p>By continuing , I agree to the terms of use and privacy policy</p>
        </div>
        {currentState === "Login" 
            ? <p>Create new account <span onClick={()=>setCurrentState("Sign up")}>Click Here</span></p>
            : <p>Already have an account ? <span onClick={()=>setCurrentState("Login")}>Login Here</span></p>}
      </form>
    </div>
  )
}

export default LoginPopup

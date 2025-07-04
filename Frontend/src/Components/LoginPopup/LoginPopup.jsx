import React, { useContext, useEffect, useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'
import axios from 'axios'


const LoginPopup = ({setShowLogin}) => {

    const {url,setToken} = useContext(StoreContext);

    const[currentState,setCurrentState] = useState("Login")
    const[data,setData] = useState({
      name : "",
      email : "",
      password : ""
    })

    const onChangeHandler = (event) =>{
      const name = event.target.name;
      const value = event.target.value;
      setData(data => ({...data,[name]:value}));
    }

    const onLogin = async(event)=>{
      event.preventDefault()
      let newURL = url;
      if (currentState==="Login") {
        newURL += "/api/user/login";
      }else{
        newURL += "/api/user/register";
      }

      const response = await axios.post(newURL,data);

      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token",response.data.token);
        setShowLogin(false);
      }else{
        alert(response.data.message);
      }
      
    }


    // useEffect(()=>{
    //   console.log(data)
    // },[data])                      TO CHECK IF DATA IS UPDATING OR NOT

  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currentState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-input">
          {currentState === "Login" ? <></> : <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your name' required />}
          
          <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your email' required />
          <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Your password' required />
        </div>
        <button type='submit'>{currentState==="Sign up" ? "Create Account" : "Login"}</button>
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

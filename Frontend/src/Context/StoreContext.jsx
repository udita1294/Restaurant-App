import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {


    const[cartItem,setCartItem] = useState({});
    const url = "http://localhost:4000";
    const[token,setToken] = useState("");

    const addToCart = (itemId)=>{
        if(!cartItem[itemId]){
            setCartItem((prev)=>({...prev , [itemId] : 1}))
        }
        else{
            setCartItem((prev)=>({...prev , [itemId] : prev[itemId]+1}))
        }
    }

    const removeFromCart = (itemId) => {
        setCartItem((prev)=>({...prev , [itemId] : prev[itemId]-1}))
    }

    useEffect(()=>{
        console.log(cartItem);
    },[cartItem])

    useEffect(()=>{
        if (localStorage.getItem("token")) {
            setToken(localStorage.getItem("token"))   // this will used to stay logged in even if the webpage is reloaded
        }
    },[])

    const contextValue = {
        food_list,
        cartItem,
        setCartItem,
        addToCart,
        removeFromCart,
        url,
        token,
        setToken
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider
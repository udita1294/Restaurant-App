import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import './Cart.css'
import { StoreContext } from '../../Context/StoreContext'

const Cart = () => {

  const {cartItem, food_list ,removeFromCart, getTotalCartAmount , url }= useContext(StoreContext);
  console.log('food_list', food_list);
  console.log('cartItem', cartItem);

  const navigate = useNavigate()

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br/>
        <hr />
        {food_list.map((item,index)=>{
          if(cartItem[item._id]>0){
            return(
              <div>
              <div  className='cart-items-title cart-items-items'>
                <img src={url+"/images/"+item.image} alt="" srcset="" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItem[item._id]}</p>
                <p>${item.price*cartItem[item._id]}</p>
                <p  onClick = {()=>{removeFromCart(item._id)}} className='cross'>X</p>

              </div>
              <hr />
              </div>
            )
          }
        })}
      </div>
      <div className='cart-bottom'>
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount()===0 ? 0 : getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button onClick={()=>navigate("/order")}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
        <div>
          <p>If you have a Promo-Code, Enter it here </p>
          <div className="cart-promocode-input">
            <input type="text" placeholder='Promo-code' />
            <button>Submit</button>
          </div>
        </div>
        </div>
      </div>
      

    </div>
  )
}

export default Cart

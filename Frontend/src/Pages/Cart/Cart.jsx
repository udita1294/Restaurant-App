import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../Context/StoreContext'

const Cart = () => {

  const {cartItem, food_list ,removeFromCart }= useContext(StoreContext);
  console.log('food_list', food_list);
  console.log('cartItem', cartItem);


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
                <img src={item.image} alt="" srcset="" />
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{cartItem[item._id]}</p>
                <p>{item.price*cartItem[item._id]}</p>
                <p  onClick = {()=>{removeFromCart(item._id)}} className='cross'>X</p>

              </div>
              <hr />
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}

export default Cart

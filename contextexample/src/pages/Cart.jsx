import React, { useContext } from 'react'
import { countContext } from '../MainContext'

export default function Cart() {
  let {cart,setCart}=useContext(countContext)  
  return (
    <div>
       
        {cart.length>=1 
            ?
            cart.map((cartItems,index)=>{
                return(
                    <div className='border-2 p-3'> 
                        <img  src= {cartItems.thumbnail} alt="" />
                        <p>Qty {cartItems.qty}</p>
                        <p>Qty {cartItems.price}</p>
                      {cartItems.title} </div>
                )
            })
            
            :
            "No Data Found..."

        
        }
    </div>
  )
}

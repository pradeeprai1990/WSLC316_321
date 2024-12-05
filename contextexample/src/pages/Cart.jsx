import React, { useContext } from 'react'
import { countContext } from '../MainContext'

export default function Cart() {
  let {cart,setCart}=useContext(countContext)  
  return (
    <div className='max-w-[1320px] mx-auto'>
        <h1 class="text-3xl font-bold py-5 text-center">CART</h1>
        {cart.length>=1 
            ?
            cart.map((cartItems,index)=>{
                return(
                    <CartRow cartItems={cartItems}/>
                )
            })
            
            :
            "No Data Found..."

        
        }
    </div>
  )
}


function CartRow({cartItems}){
  
  let {cart,setCart}  =useContext(countContext);

  let removeCart=()=>{

    if(confirm("Are you sure want to delete?")){
      let filterData=cart.filter((items)=>items.pid!=cartItems.pid);

      setCart(filterData)
    }
  
  }
  
  return(
    <div className='border-2 p-3 grid grid-cols-[10%_auto] gap-2 items-center mb-4'> 
    <div>
     <img  src= {cartItems.thumbnail} alt="" />
     </div>
     <div className='flex flex-col items-end'>
       <p>Qty {cartItems.qty}</p>
       <p>Qty {cartItems.price}</p>
       <input type="number" value={cartItems.qty} />
       <p>{cartItems.title} </p>
       <button onClick={removeCart} className='bg-red-500 p-3'>Delete</button>
   </div>
   
   
   </div>
  )
}
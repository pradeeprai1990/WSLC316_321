import React, { useContext, useEffect, useState } from 'react'
import { countContext } from '../MainContext'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { IoMdAdd } from "react-icons/io";
import { RiSubtractLine } from "react-icons/ri";

export default function Cart() {
  let { cart, setCart } = useContext(countContext)
  let [finalTotal,setFinalTotal]=useState(0)
  let [totalP,settotalP]=useState(0)
  useEffect(()=>{
    let total=0;
    let allPoduct=0
    cart.forEach((items)=>{
      total+=items.Qty*items.price  //2*10 = 20
      allPoduct+=items.Qty ;                        //3*15 =45 
    })
    settotalP(allPoduct)
    setFinalTotal(total)

  },[cart])
  return (
    <div>
      <h1 className='text-center py-5'>Cart</h1>
      <div className='bg-gray-100'>
        <div className='max-w-[1320px] mx-auto py-9'>
          <div className="flex shadow-md my-10">
            <div className="bg-white px-10 py-10 w-[100%]">
              <div className="flex justify-between border-b pb-8">
                <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                <h2 className="font-semibold text-2xl">{cart?.length || 0} Items</h2>
              </div>
              <div className="mt-10">
                <div className="flex mb-5">
                  <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                  <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Quantity</h3>
                  <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Price</h3>
                  <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Total</h3>
                </div>
                {
                  cart && cart.length > 0
                    ?
                    cart.map((item) => {
                      return (
                        <CartRow item={item} />
                      )
                    })
                    :
                    (
                      <p className="text-center py-5 text-gray-500">Your cart is empty.</p>
                    )
                }
              </div>

              <div className='flex justify-end gap-2'>
                <h3>Total</h3> 
                <div>$ {finalTotal} </div>
                <div>Total Count {totalP} </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


function CartRow({ item }) {
  let { pid, title, thumbnail, price, Qty } = item
  let { cart, setCart } = useContext(countContext)

  let [txtqty,settxtQty]=useState(Qty)


    let removeFromCart = () => {
     if(confirm("You want Delete Data From Cart")){
      let updatedCart = cart.filter((item) => item.pid !== pid);
      setCart(updatedCart);
      toast.success("Your Data is removed From cart",{
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          toggle:undefined
      })
      }
      console.log(id)
    };
  

  useEffect(()=>{
      let updayeData=cart.filter((items)=>{
        if(items.pid==pid){
          items['Qty'] =  txtqty
        }
        return items;
      })
      setCart(updayeData)
  },[txtqty]) 
  
  


  return (
    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
      <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          toggle={undefined}
          />
      <div className="flex w-2/5">
        <div className="w-20">
          <img className="h-24" src={thumbnail} alt={title} />
        </div>
        <div className="flex flex-col justify-between ml-4 flex-grow">
          <span className="font-bold text-sm">{title}</span>
          <button
            className="font-semibold hover:text-red-500 text-gray-500 text-xs text-left"
            onClick={removeFromCart}
          >
            Remove
          </button>
        </div>
      </div>
      <div className="flex justify-center w-1/5">
        <button className='fill-current text-gray-600 w-3' onClick={()=>settxtQty(txtqty+1)}>
          <IoMdAdd /> 
        </button>
        <input className="mx-2 border text-center w-10" readOnly disabled  type="text" value={txtqty}  />
        <button>
        <button className='fill-current text-gray-600 w-3' onClick={()=>settxtQty( txtqty>1 ? txtqty-1 : 1 )}>
          <RiSubtractLine />
        </button>
        </button>
      </div>
      <span className="text-center w-1/5 font-semibold text-sm">${price}</span>
      <span className="text-center w-1/5 font-semibold text-sm">
        ${Qty*price}
      </span>
    </div>
  )
}
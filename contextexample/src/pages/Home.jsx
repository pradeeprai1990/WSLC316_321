import React, { useContext, useEffect, useState } from 'react'
import { countContext } from '../MainContext'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

export default function Home() {
  let {count,setCount}  =useContext(countContext) ;

  let [products,setProduct]=useState([])


  let getProduct=()=>{
    axios.get(`https://dummyjson.com/products`)
    .then((res)=>res.data)
    .then((finalres)=>{
        setProduct(finalres.products)  //[]
    }) 
  }

  useEffect(()=>{
    getProduct()
  },[])



  return (
    <div>

      <ToastContainer/>
      <div className='max-w-[1320px] mx-auto'>
      <h1 class="text-3xl font-bold py-5 text-center">Our Product</h1>

      <div className="bg-white">
      <div className="mx-auto ">
        

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {
          products.map((product) => (
              <ProductCard product={product} />
          ))
          }
        </div>
      </div>
    </div>
      </div>
    </div>
  )
}

function ProductCard({product}){

  let {cart,setCart}  =useContext(countContext);

  let {title,thumbnail,category,id,price}=product

  let addToCart=()=>{
    let obj={
      pid:id,
      thumbnail,
      price,
      title,
      qty:1
    }
    let cartOldData=[...cart] //[{…}, {…}, {…}, {…}]
    cartOldData.push(obj)
    setCart(cartOldData)
    toast.success("Your Item add in Cart...")

  }

  return(
    <div key={id} className="group relative shadow-lg border">
              <img
                alt={title}
                src={thumbnail}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                   
                      <span aria-hidden="true" className="" />
                      {title}
                   
                  </h3>
                
                  <p className="mt-1 text-sm text-gray-500">{category}</p>
                  <button onClick={addToCart} className='bg-red-700 text-white p-3'>Add to Cart</button>
                </div>
                <p className="text-sm font-medium text-gray-900">{price}</p>
              </div>
     </div>
  )
}
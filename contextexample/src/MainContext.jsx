import React, { createContext, useEffect, useState } from 'react'

//Context Create
export let countContext=createContext()
export default function MainContext({children}) {
  let [count,setCount]=useState(0) 
                                  //Json to Array
  let [cart,setCart]=useState( JSON.parse(localStorage.getItem("CART")) ?? [] )
  
  let obj={count,setCount,cart,setCart}

  useEffect(()=>{
     localStorage.setItem("CART",JSON.stringify(cart))  //Array to JSON
  },[cart])
  return (
    <countContext.Provider value={obj}>
        {children}
    </countContext.Provider>
  )
}

import React, { createContext, useEffect, useState } from 'react'

//Context Create
export let countContext=createContext()
export default function MainContext({children}) {
  let [count,setCount]=useState(0) 
  
  let [cart,setCart]=useState([])
  
  let obj={count,setCount,cart,setCart}

  useEffect(()=>{
      console.log(cart)
  },[cart])
  return (
    <countContext.Provider value={obj}>
        {children}
    </countContext.Provider>
  )
}

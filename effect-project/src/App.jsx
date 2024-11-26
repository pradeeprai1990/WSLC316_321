import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count1,setCount1]=useState(1)
  let [count2,setCount2]=useState(1)

  let getProduct=()=>{
    console.log("Product Data")
  }

  let getCategory=()=>{
    console.log("Category Data")
  }
  useEffect(()=>{
    getProduct()
    getCategory();
  })

  // useEffect(()=>{
  //   getProduct()
  //   getCategory();
  // },[count1])

  // useEffect(()=>{
  //   getProduct()
  //   getCategory()

  // },[]) //task one Time


  return (
    <>

       <button onClick={()=>setCount1(count1+1)}>Change Count1  {count1}  </button>


       <button  onClick={()=>setCount2(count2+1)}>Change Count2 {count2} </button>
    </>
  )
}

export default App

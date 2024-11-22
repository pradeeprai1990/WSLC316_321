import React, { useState } from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'

export default function Home() {
    let [c,updateC]=useState(1)

    let count=1;

    let countChange=()=>{
        count++;
        console.log(count)
    }


    let sumData=(num1,num2)=>{ //Parameter Function
        console.log(num1+num2)
    }

  return (
    <div>


        
        <Header email="pradeep.ws@gmail.com" phone="88888888">
            <h3>Welcome</h3>
            <p>Hello World</p>
        </Header> 
        <button onClick={()=> sumData(25,50) }>Add</button>

        <h2>{count}</h2>
        <button onClick={countChange}>count </button>

        <h1>Home Compontent</h1>
        <Footer/>
    </div>
  )
}

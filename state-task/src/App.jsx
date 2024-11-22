
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa6";
import { IoCloseCircleSharp } from "react-icons/io5";

function App() {
  let [loginModal,setloginModal]=useState(false)
  let [count,setCountValue]=useState(1)
  let [password,setPassword]=useState(false)
  let [boxcolor,setBoxcolor]=useState("red")
 

  // let chnageCounter=()=>{
   
  //   setCountValue(count+1)  
  // }
  let randomColor=()=>{
    let redCode= Math.floor(Math.random()*255);
    let greenCode=Math.floor(Math.random()*255);
    let blueCode=Math.floor(Math.random()*255);
    setBoxcolor(`rgb(${redCode},${greenCode},${blueCode})`)
  }
  
  return (
   <>

   <div className='box' style={{backgroundColor:boxcolor}}></div>


   <br/>
   <button onClick={randomColor}>Random Color</button>

    <br/>
    <br/>
    <br/>

    {
     loginModal ?
         <div>
          <div className='loginOverLay'></div>
          <div className='loginBox'>
            <h2>Login  <IoCloseCircleSharp onClick={()=>setloginModal(false)} className='closeIcon' /> </h2>
          </div>
         </div>
        :
        ''

    } 
     


         Show Hide Password
        <br/>

        <input type={ (password) ? 'text' : 'password'  }  /> 
        
        <button onClick={()=>setPassword(!password)}>
           { (password) ? <FaEyeSlash /> :<IoEyeSharp /> } 
        </button>



        
        
        
        <br/> <br/>
        <br/>
        Counter Change
        <h1> {count} </h1>
        <button onClick={()=>setCountValue(count+1)}>Counter</button>
        <br/> <br/>

        <button onClick={()=>setloginModal(true)}>Login Modal</button>
   
   
   
        </>
  )
}

export default App

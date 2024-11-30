import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImageExample from './ImageExample';


function App() {
 let num1Ref=useRef();
 let num2Ref=useRef();
 let outputRef=useRef()
 let addData=()=>{
  
  let output=Number(num1Ref.current.value)+Number(num2Ref.current.value)
  outputRef.current.value=output
  num1Ref.current.value=''
  num2Ref.current.value=''
 }
  return (
    <>
        <ImageExample/>
        Num1 <input type="text" placeholder='Num1' ref={num1Ref} />
        <br/>
        Num2 <input type="text" ref={num2Ref} />
        <br/>
        <button onClick={addData}>Add</button>
        <br/>
        OutPut <input type="text" ref={outputRef} />
    </>
  )
}

export default App

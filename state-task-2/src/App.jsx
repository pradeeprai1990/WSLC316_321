import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { IoIosAddCircle } from "react-icons/io";
import { IoMdCloseCircle } from "react-icons/io";

function App() {
  
  let [allTodo,setAllDo]=useState([])

  let addTodo=(event)=>{
    
    let uservalue=event.target.todoName.value; //raj
    let oldData=[...allTodo] //Old Value Copy ["ram","ravi"]
    oldData.push(uservalue) //Old value + New value ["ram","ravi","raj"]
    setAllDo(oldData)
    // setAllDo([...allTodo,uservalue])
    event.target.reset();
    event.preventDefault();
    
  }

 
  let deleteRow=(deleteIndex)=>{
     
      let oldData=[...allTodo]
      oldData.splice(deleteIndex,1)
      setAllDo(oldData)

  }

  
  return (
    <>
       
        <h1 className='text-3xl font-bold py-5 text-center'>Work To-Dos</h1>
          <form action="" onSubmit={addTodo} className='max-w-[1000px] mx-auto grid grid-cols-[90%_auto]'>
              <input type="text" name='todoName' className='border-2 h-14 pl-3 text-2xl' />
              <button className='text-center'>
                <IoIosAddCircle className='text-3xl mx-auto' />
              </button>
          </form>

          <div className='max-w-[1000px] mx-auto'>
              <ul class=" text-sm font-medium text-gray-900 dark:text-white">

                 {allTodo.length>=1
                    ?
                    allTodo.map((value,index)=>{
                        return(
                          <li class="w-full px-4 py-2 border border-gray-200 rounded-t-lg dark:border-gray-600 mt-3 text-[17px] relative">
                           {index+1}  {value}
                          <IoMdCloseCircle onClick={()=>deleteRow(index)} className='absolute right-3 top-[10px] cursor-pointer' />
                          </li> 
                        )
                    })
                    
                    :
                    <li class="w-full px-4 py-2 border border-gray-200 rounded-t-lg dark:border-gray-600 mt-3 text-[17px] relative"> 
                      No Data Found
                    </li>  
                 
                 } 
                
                   
              </ul>  
          </div> 
   
    </>
  )
}

export default App

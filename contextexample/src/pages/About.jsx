import React, { useContext } from 'react'
import { countContext } from '../MainContext'

export default function About() {
 let {count,setCount}=useContext(countContext)   
  return (
    <div>
        About {count}
    </div>
  )
}

import React, { useContext } from 'react'
import { Navbar } from "flowbite-react";
import { Link } from 'react-router-dom';
import { countContext } from '../MainContext';
export default function Header() {
  let {cart} = useContext(countContext)

  return (
    <div className='shadow-lg  sticky z-10 top-0 text-[20px] font-bold '>
    <div className='max-w-[1320px] mx-auto font-bold'>
      <Navbar fluid rounded>
      <Navbar.Brand>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className='cursor-pointer'>
        <Navbar active>
          <Link to={"/"}>Home</Link>
        </Navbar>
        <Navbar>
          <Link to={"/cart"}>Cart({cart.length})</Link>
        </Navbar>
      </Navbar.Collapse>
    </Navbar>
    </div>
    </div>
  )
}

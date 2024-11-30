import React from 'react'
import { BsDashCircle } from 'react-icons/bs'
import { GrDashboard } from 'react-icons/gr'
import { Link } from 'react-router-dom'

export default function Siderbar() {
    return (
        <div className='bg-gray-200'>
            <div class="flex items-center  border-b border-slate-400 py-4 justify-center">
                <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 me-3 sm:h-7" alt="Flowbite Logo" />

                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Frank and Oak</span>
            </div>
            <ul className='pl-4'>
                <li className='flex items-center  gap-3 py-3'>
                     <GrDashboard/> <Link to={'/dashboard'}>  Dashboard </Link>
                   
                </li>
                <li className='flex items-center  gap-3 py-3'>
                    <GrDashboard/> <Link to={'/dashboard/profile'}> Profile </Link> 
                   
                </li>
            </ul>
        </div>
    )
}

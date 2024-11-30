
import React from 'react'
import Header from './common/Header'
import { Outlet } from 'react-router-dom'
import Siderbar from './common/Siderbar'

export default function RootLayout() {
  return (
    <div className='grid grid-cols-[20%_auto] gap-5'>
        <div>
            <Siderbar/>
        </div>
        <div>
            <Header/>
            <Outlet/>
        </div>
    </div>
  )
}

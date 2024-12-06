import React from 'react'
import Header from './comm/Header'
import { Outlet } from 'react-router-dom'
export default function RootLayout() {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

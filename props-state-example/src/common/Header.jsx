import React from 'react'
import "../assets/Header.css"
export default function Header( {email,phone,children} ) {
  return (
    <div>
        <h3>Header Compontent |{email} {phone}  </h3>
        {children}
    </div>
  )
}

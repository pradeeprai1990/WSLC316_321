import React from 'react'

export default function Header( props ) {

 console.log(props)   
  let {companyName,phone}=props  //{companyName: 'WsCubeTech', phone: '8888888', email: 'ws@gmail.com'}

  return (
    <div>
        {companyName} | {phone}
        <h1>Header Section</h1>
    </div>
  )
}

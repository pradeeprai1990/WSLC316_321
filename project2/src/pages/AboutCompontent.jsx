import React from 'react'

import Footer from '../common/Footer'
import Header from '../common/Header'

export default function AboutCompontent() {

  let cname="WsCubeTech"  
 let phone="8888888"
  return (
    <div>
        <Header  companyName={cname} phone={phone} email="ws@gmail.com"  />
            <h1>About Us</h1>

            <BtnCompontents value="Save" url="https://learner.wscubetech.com/"/>
            <BtnCompontents value="Login"/>
            <BtnCompontents value="Go"/>
            <BtnCompontents value="Register"/>

        <Footer/>
    </div>
  )
}

function BtnCompontents({value,url}){
    return(
        <button>
          <a href={url} >  {value}  </a>
        </button>
    )
}

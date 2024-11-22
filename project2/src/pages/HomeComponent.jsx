import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'

export default function HomeComponent() {
  let users=["ram","ravi","raj","ws"]

  let data=users.map((value,index)=><h2> {index+1} {value} </h2>)


  // users.forEach((value,index)=>{
  //   if(value=="ram"){
  //     console.log(value)
  //   }
   
  // })

// for(let i =1;i<=10;i++){
//   return(
//     <div>Hello</div>
//   )
// }


  return (
    <div>
        <Header/>

        <h1>Welcome to WS</h1>

        {data}

        { users.map((value,index)=> <div> {index+1} {value} </div> )}


        {
        users.map((value,index)=>{

            return(
              <div>{value}</div>
            )

          })
        }


        <div></div>
        <Footer/>
    </div>
  )
}

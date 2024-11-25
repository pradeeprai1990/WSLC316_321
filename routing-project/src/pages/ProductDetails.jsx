import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import { useParams } from 'react-router-dom'
import { allproduct } from '../Data/ProductData'

export default function ProductDetails() {
  let {pid}=useParams() //Object { pid:2 }
  console.log(pid) //2

  let singleProductDetails=allproduct.filter((items)=>items.id==pid)[0] //Array({})
  
  return (
    <div>
        <Header/>
        <div className='max-w-[1320px] mx-auto py-5'>
            <h1 className='text-3xl font-bold'>
                {singleProductDetails.title}
            </h1>
             
             <div className='max-w-[1320px] mx-auto grid grid-cols-2 gap-5'>
                <div>
                    <img src= {singleProductDetails.thumbnail} alt="" />
                </div>
                <div>
                    <h2 className='text-2xl font-bold'>
                       </h2><p>{singleProductDetails.description}</p>
                    <h3 className=' font-bold'>
                    {singleProductDetails.category}
                    </h3>
                </div>
             </div>
             </div>
        <Footer/>
    </div>
  )
}

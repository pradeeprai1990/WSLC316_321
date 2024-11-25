import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import { allproduct } from '../Data/ProductData'
import { Link } from 'react-router-dom'

export default function Product() {
  return (
    <div>
        <Header/>
        <div className='max-w-[1320px] mx-auto py-5'>
             <h1 className='text-3xl font-bold'>Our Product</h1>
             
             <div className='grid grid-cols-3 gap-3'>
                {allproduct.map((items,index)=>{
                    return(
                        <div className='shadow-lg'>
                            <Link to={`/product-details/${items.id}`}>
                                <img src={items.thumbnail} alt="" />
                                <h3 className='p-3'>{items.title}</h3>
                            </Link>
                        </div>   
                    )
                })}
              
             </div>
        </div>
       
        <Footer/>
    </div>
  )
}

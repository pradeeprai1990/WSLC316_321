import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <Header/>
        <div className='max-w-[1320px] mx-auto py-5'>
             <h1 className='text-3xl font-bold'>Home</h1>
             <p className='text-[20px] pb-5'>Advance your coding skills with a curriculum crafted and taught by industry experts that primes you for professional growth.</p>

             <p className='text-[20px] pb-5'>
                
              <Link to={'/about-us'} className='text-blue-500'> Advance </Link>
                
                
                 your coding skills with a curriculum crafted and taught by industry experts that primes you for professional growth.</p>
             <p className='text-[20px] pb-5'>Advance your coding skills with a curriculum crafted and taught by industry experts that primes you for professional growth.</p>
             <p className='text-[20px] pb-5'>Advance your coding skills with a curriculum crafted and taught by industry experts that primes you for professional growth.</p>
             <p className='text-[20px] pb-5'>Advance your coding skills with a curriculum crafted and taught by industry experts that primes you for professional growth.</p>
             <p className='text-[20px] pb-5'>Advance your coding skills with a curriculum crafted and taught by industry experts that primes you for professional growth.</p>
             <p className='text-[20px] pb-5'>Advance your coding skills with a curriculum crafted and taught by industry experts that primes you for professional growth.</p>
             <p className='text-[20px] pb-5'>Advance your coding skills with a curriculum crafted and taught by industry experts that primes you for professional growth.</p>
             <p className='text-[20px] pb-5'>Advance your coding skills with a curriculum crafted and taught by industry experts that primes you for professional growth.</p>
        </div>
       
        <Footer/>
    </div>
  )
}

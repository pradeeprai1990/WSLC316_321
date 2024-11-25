import React from 'react'
import banner from "../assets/images/81f3ff974d82520780078ba1cfbd453a1583259680.avif"
export default function HomeBanner() {
    return (
        <section className={`w-[100%] lg:h-[65vh]   bg-cover bg-center`} style={{ background: `url(${banner})`, backgroundSize: 'cover' }}>
            <header className='max-w-[1100px] mx-auto'>


                <nav class=" border-gray-200 dark:bg-white">
                    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
                            <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
                            <span class="self-center text-white whitespace-nowrap dark:text-white text-[20px]">Get the App</span>
                        </a>
                        <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4  border-gray-100 rounded-lg md:flex-row md:space-x-8 ">
                                <li>
                                    <a href="#" class="block py-2 px-3 text-white text-[20px]rounded md:bg-transparentmd:p-0 dark:text-white text-[20px] " aria-current="page">Home</a>
                                </li>
                                <li>
                                    <a href="#" class="block py-2 px-3 text-white text-[20px]rounded md:bg-transparentmd:p-0 dark:text-white text-[20px] " aria-current="page">About</a>
                                </li>
                                <li>
                                     <a href="#" class="block py-2 px-3 text-white text-[20px]rounded md:bg-transparentmd:p-0 dark:text-white text-[20px] " aria-current="page">Services</a>
                                </li>
                               
                            </ul>
                        </div>
                    </div>
                </nav>

            </header>
            
            <img src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png" className='w-[300px] py-4 mx-auto' alt="" />
        </section>
    )
}

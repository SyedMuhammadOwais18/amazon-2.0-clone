import React from 'react'
import Image from 'next/image';
import {Bars3Icon,MagnifyingGlassIcon,ShoppingCartIcon} from "@heroicons/react/24/outline";
function Header() {
  return (
    <header>
      <div className='flex items-center bg-amazon_blue flex-grow py-2 p-1'>
        <div className='flex items-center mt-2 flex-grow sm:flex-grow-0'>
            <Image src = "https://links.papareact.com/f90" width={150} height={40} objectFit='contain' className='cursor-pointer' />
        </div>
        <div className='bg-yellow-400 hover:bg-yellow-500 hidden sm:flex h-10 items-center rounded-md flex-grow cursor-pointer'>
            <input type = 'text'  className='flex-grow flex-shrink w-6 p-2 rounded-l-md focus:outline-none h-full px-4'/>
            <MagnifyingGlassIcon className='h-12 p-4' />
            
        </div>
        <div className='text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap'>
            <div className='link'>
                <p>hello from owais</p>
                <p className='font-extrabold md:text-sm'>Account & Lists</p>
            </div>
            <div className='link'>
                <p>Returns</p>
                <p className='font-extrabold md:text-sm'>& Orders</p>
            </div>
            <div className='link relative flex items-center'>
                <span className='absolute top-0 right-0 md:right-10 bg-yellow-400 w-4 h-4 text-center rounded-full text-black font-bold'>4</span>
                <ShoppingCartIcon  className='h-10'/>
                <p className='hidden md:inline font-extrabold md:text-sm mt-2'>Basket</p>
            </div>
        </div>
      </div>
      {/* bottom nav */}
      <div className='flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm'>
            <p className='link flex items-center'>
              <Bars3Icon className="h-6 mr-1"/>
              All
            </p>
            <p className='link'>Prime Video</p>
            <p className='link'>Amazon Business</p>
            <p className='link'>Todays Deals</p>
            <p className='link hidden lg:inline-flex'>Electronics</p>
            <p className='link hidden lg:inline-flex'>Food & Grocery</p>
            <p className='link hidden lg:inline-flex'>Prime</p>
            <p className='link hidden lg:inline-flex'>Buy Again</p>
            <p className='link hidden lg:inline-flex'>Shopper Toolkit</p>
            <p className='link hidden lg:inline-flex'>Health & Personal Care</p>
      </div>
    </header>
  )
}

export default Header

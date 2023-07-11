import React from 'react';
import Link from 'next/link';
import { FaCartPlus } from "react-icons/fa"

export default function Hero() {
  return (
    <div className='h-screen w-full px-6 my-6 flex justify-center items-center bg-center bg-cover hero-bg-image md:py-10 md:justify-start'>
        <div className='absolute top-0 left-0 right-0 bottom-0 z-[2] ' />
        <div className='text-white z-[2] pt-10'>
            <span className='bg-[#cdcdcd] text-black p-2'>Sale 70%</span>
            <h1 className='text-xl text-black font-bold my-4 md:my-10 md:text-[30px] md:leading-none'>THE EARLY SUMMER SALE<br/>UPTO 50% ON SELECTED ITEMS.</h1>
            <p className='text-[20px] text-black my-8'>Discover curated outfits for on-trend looks. Browse through the fashion<br/>essentials to stay on top of the trend game this season</p>
            <Link href={'/products'} >
                <button className='mt-4 px-12 flex py-2 md:py-4 bg-[var(--primary-color)]'>
                  <span className='mr-2 pt-1'><FaCartPlus /></span>
                    Cart Shopping
                </button>
            </Link>
        </div>
    </div>
  )
}

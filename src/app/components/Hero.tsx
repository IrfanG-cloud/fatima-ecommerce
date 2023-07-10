import React from 'react';
import Link from 'next/link';
import { FaCartPlus } from "react-icons/fa"

export default function Hero() {
  return (
    <div className='h-screen w-full px-6 my-6 flex justify-center items-center bg-center bg-cover hero-bg-image md:py-10 md:justify-start'>
        <div className='absolute top-0 left-0 right-0 bottom-0 z-[2] ' />
        <div className='text-white z-[2] pt-10'>
            <span className='bg-[#cdcdcd] text-black p-2'>Sale 70%</span>
            <h1 className='text-4xl text-black font-bold my-4 md:my-10 md:text-[70px] md:leading-none'>An Industrial Take <br/>on Streetwear</h1>
            <p className='text-[20px] text-black my-8'>Anyone can beat you but no one can beatyour outfit <br/>as long as you wear Dine outfits.</p>
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

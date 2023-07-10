import React from 'react'

export default function Newsletter() {
  return (
    <div className='bg-[#ffffff] px-6 text-center py-12'>
        <div className='my-4'>
        <div className="z-index justify-center items-center">Newsletter</div>
            <h1 className='text-4xl py-3'>Subscribe Our Newsletter</h1>
            <p className=''>Get the latest information and promo offers directly</p>
        </div>
        <div className="flex justify-center item-center py-4">
            <input type="email" className="border border-[#000] p-2 w-[400px]" placeholder="Email Address" />
            <button type="submit" className='bg-[#000] text-[#fff] ml-2 px-4 py-2'>Get Started</button>
        </div>
    </div>
  )
}

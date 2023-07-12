import Link from 'next/link'
import Image from 'next/image'
import { Image as IImage } from 'sanity'
import React, { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { urlForImage } from '../../../sanity/lib/image'
import Counter from '@/app/components/Counter'



export default function page() {
  return (
 
    <div className="w-full my-20">
        <div className='grid grid-cols-1 justify-center item-center md:grid-cols-2 gap-x-4 px-6'>
                <div className="w-3/5 flex">
                    <div className=''>
                        <h1>Image here</h1>
                        
                        {/* <div>
                            <Image 
                            src={urlForImage?(image).url()} 
                            alt="product" 
                            width={300} height={500} 
                            /> */}
                    </div>
                    <div className='w-full'>
                            <div className='flex justify-between'>
                                <div>Cameryn Sash Tie Dress</div>
                                <div>icon</div>
                            </div>
                                <p>description</p>
                                <p>Delivery Estimation</p>
                                <p> 5 Working Days</p>
                            <div className='flex justify-between'>
                                <span>price $</span>
                                <div className='flex'>
                                    <span><Counter /></span>
                                </div>
                            </div>
                    </div>
                </div>

                <div className="w-2/5 ">
                        <h3>Order Summary</h3>
                        <div className='flex justify-between'>
                            <p>Quantity</p>
                            <span>2 product</span>
                        </div>
                        <div className='flex justify-between'>
                            <p>Sub Total</p>
                            <span> 1090  $</span>
                        </div>
                        <div className='bg-black'>
                            <Link href="#" >
                                <button className='text-white text-center'>Proccess To Cart</button>
                            </Link>
                        </div>
                </div>
        </div>
    </div>

  )
}

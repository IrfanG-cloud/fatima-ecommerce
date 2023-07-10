import React, { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { client } from '../../lib/sanityClient'
import { Image as IImage } from 'sanity'
import { urlForImage } from '../../../sanity/lib/image'

export const getProductData = async () => {

    const res = await client.fetch(`*[_type== 'product' && category-> name== 'check']`)
    return res;
  }
  
  interface IProduct{
    title:string,
    description:string,
    price: number,
    image: IImage,
    category: {
      name:string
    }
  }

export default async function Checkproduct() {
    const data:IProduct[]= await getProductData();
    console.log(data);

   const handleAddToCart = async () => {
    const res = fetch("/api/cart", {
        method: "POST",
        body:JSON.stringify({
            // product_id: item._id
        })
    })
   }

  return (
    <div className="w-full mt-16">
        <div className='text-center py-6'>
            <span className='text-1xl text-[var(--primary-color)]'>
                Products
            </span>
            <h1 className=' text-2xl font-bold md:text-4xl'>Check What We Have</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-x-1 px-6'>
        {data.map((item) => (
            <div className="item py-4">
                <Link href="/products" className='transition-transform duration-500 ease-in-out transform hover:scale-150'>
                <Image 
                    src={urlForImage(item.image).url()} 
                    alt="product" 
                    width={300} 
                    height={500} 
                />
                <p className='font-bold'>${item.price}</p>
                <h3 className='font-bold'>{item.title}</h3>
                </Link>
            </div>
        ))}
        </div>
    </div>

  )
}

import React, { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { client } from '../../lib/sanityClient'
import { Image as IImage } from 'sanity'
import { urlForImage } from '../../../sanity/lib/image'

export const getProductData = async () => {

    const res = await client.fetch(`*[_type== 'product' && category-> name== 'promotion']`)
    return res;

  }
  
  interface IProduct{
    id: any,
    title:string,
    description:string,
    price: number,
    image: IImage,
    promotion: {
      name:string
    }
  }

export default async function Promotions() {
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
                Promotions
            </span>
            <h1 className=' text-2xl font-bold md:text-4xl'>Our Promotions Events</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-x-1 px-6'>
        {data.map((item) => (
            <div key={item.id} className="item py-4">
                <Link href="/products" className='transition-transform duration-500 ease-in-out transform hover:scale-150'>
                <Image 
                    src={urlForImage(item.image).url()} 
                    alt="product" 
                    width={300}
                    height={500} 
                />
                <p className='font-bold'>{item.price} AED</p>
                <h3 className='font-bold'>{item.title}</h3>
                </Link>
            </div>
        ))}
        </div>
    </div>

  )
}

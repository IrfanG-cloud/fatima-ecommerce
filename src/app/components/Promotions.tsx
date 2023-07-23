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
    size: string,
    quantity: number,
    promotion: {
      name:string
    }
  }

export default async function Promotions() {
    const data:IProduct[]= await getProductData();

    // let dataSlice = data.slice(0,3) // 3 image show
    
  return (
    <div className="w-full mt-16">
        <div className='text-center py-6'>
            <span className='text-1xl text-[var(--primary-color)]'>
                Promotions
            </span>
            <h1 className=' text-2xl font-bold md:text-4xl'>Our Promotions Events</h1>
        </div>
        <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-x-1 px-6 '>
            {data.map((item) => (
              <div key={item.id} className="item py-4 justify-center">
                <Link href="/products" className='transition-transform duration-500 ease-in-out transform hover:scale-150'>
                <Image 
                    src={urlForImage(item.image).url()} 
                    alt="product" 
                    width={400}
                    height={500} 
                />
                <p className='font-bold'>{item.price} AED</p>
                <p>{item.title}</p>
                {/* <p>{item.description}</p> */}
                </Link>
              </div>
        ))}
        </div>
    </div>

  )
}

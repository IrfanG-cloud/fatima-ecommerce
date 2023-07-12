import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { client } from '../../lib/sanityClient'
import { Image as IImage } from 'sanity'
import { urlForImage } from '../../../sanity/lib/image'


export const getProductData = async () => {

    const res = await client.fetch(`*[_type== 'product' && category-> name== 'watches']`)
  
    return res;

      console.log(res)
  }
  
  interface IProduct{
    id: any
    title:string,
    description:string,
    price: number,
    image: IImage,
    category: {
      name:string
    }
  }

export default async function Men(){
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
    <div className="w-full my-20">
        <div className='grid grid-cols-1 md:grid-cols-4 gap-x-4 px-6'>
        {data.map((item) => (
        <div key={item.id} className="item p-6 border my-2 border-[#cdcdcd]">
            <Link href={/products/+item.title}>
            <Image 
                src={urlForImage(item.image).url()} 
                alt="product" 
                width={300} height={400} />
            <span>{item.price} AED</span>
            <h3>{item.title}</h3>
            </Link>
            
            </div>
        ))}

        </div>
    </div>
  )
}
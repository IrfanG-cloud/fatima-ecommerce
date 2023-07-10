'use client';

import React, { useContext } from 'react'
import { client } from '../../../lib/sanityClient'
import Image from 'next/image'
import { Image as IImage, useDataset } from 'sanity'
import { urlForImage } from '../../../../sanity/lib/image'

import Link from 'next/link'
import Counter from '@/app/components/Counter'

export const getProductData:any = async(param='') => {

  const res = await client.fetch(`*[_type== 'product' && title=='${param}']{
    title,
    description,
    price,
    image,
    category -> {
      name
    }
  }`)

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
  

export default async function page({ params }: { params: { id: string }}) {

 let param: string = params.id;


  const data= await getProductData(param);
    
   const handleAddToCart = async () => {
    const res = fetch("/api/cart", {
        method: "POST",
        body:JSON.stringify({
            // product_id: item._id
        })
    })
   }

  return (
    
    <div className="w-full flex justify-center items-center my-20 px-4">
  
        <div className=''>
            <Image
              src={urlForImage(data[0].image).url()}
              alt={"product image"}
              width={300}
              height={500} />
          </div>
          
          <div className="p-4">
              <div className="">
                <h1 className="text-3xl my-4">{data[0].title}</h1>
              </div>
 
              <div>
              <div className='ml-4' my-6><Counter /></div>
              </div>

              <div className='flex my-4'>
                <div>

                    <button onClick={()=>handleAddToCart()} className="bg-[#000] text-white p-2 hover:bg-[#000]">
                      Add to Cart
                    </button>

                </div>
                  
                <div>
                  <p className='ml-4 font-bold text-2xl'> {data[0].price}  $</p>
                </div>
                  
              </div>
              
          </div>
    </div>

  )
}


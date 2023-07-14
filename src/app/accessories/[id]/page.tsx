
import React from 'react';
import { client } from '../../../lib/sanityClient'
import Image from 'next/image';
import { Image as IImage, useDataset } from 'sanity'
import { urlForImage } from '../../../../sanity/lib/image'
import Link from 'next/link';
import Amountincrease from '@/app/components/Counter';


const getServerSideProps:any = async (param='') => {
  console.log(param)
  const res = await client.fetch(`*[_type== 'product' && category-> name== 'accessories' && title=='']{
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
    id: any
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

  const data= await getServerSideProps(param);
    console.log(data)
   
  return (
    
    <div className="w-full justify-center items-center my-20 px-4"> 
        <div className=''>
            <Image
              src={urlForImage(data[0]?.image).url()}
              alt={"product image"}
              width={300}
              height={500} />
        </div>
          
          <div className="p-4">
              <div className="">
                <h1 className="text-xl my-4">{data[0]?.title}</h1>
                <h1 className="text-xl my-4">{data[0]?.description}</h1>
              </div>
              
              <div>
              <div className='ml-4 my-6'><Amountincrease /></div>
              </div>
              
              <div className='flex my-4'>
                <div>
                  <Link href={"https://api.whatsapp.com/send?phone=963995817380"}>
                    <button className="bg-[#000] text-white p-2 hover:bg-[#000]">
                      Add to Cart
                    </button>
                  </Link>
                </div>
                  
                <div>
                  <p className='ml-4 text-xl'>{data[0]?.price} AED</p>
                </div>
                  
              </div>
              
          </div>
 
    </div>

  )
}


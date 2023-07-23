import React, { useContext } from 'react'
import { client } from '../../../lib/sanityClient'
import Image from 'next/image'
import { Image as IImage, useDataset } from 'sanity'
import { urlForImage } from '../../../../sanity/lib/image'
import Link from 'next/link'
import Counter from '@/app/components/Counter'
import AddToCartButton from '@/app/components/AddToCardButton'



const getServerSideProps:any = async (param='') => {

  const res = await client.fetch(`*[_type== 'product' && title=='${param}']{
    title,
    description,
    price,
    image,
    size,
    quantity,
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
    size: string,
    quantity: number,
    category: {
    name:string
    }
  }
  

export default async function page({ params }: { params: { id: string }}) {

 let param: string = params.id;

  const data= await getServerSideProps(param);

  return (
    
    <div className="w-full my-20 justify-center items-center px-4 md:flex">
        <div className=''>
            <Image
              src={urlForImage(data[0].image).url()}
              alt={"product image"}
              width={300}
              height={500} />
        </div>
          
        <div className="p-4 md:ml-8">
              <div className="">
                <h1 className="text-[20px] my-2">{data[0].title}</h1>
              </div>
              <div className="">
                <h1 className="text-[16px] my-2">{data[0].description}</h1>
              </div>
              <div className='text-[20px]'>
                  <p> {data[0].price} AED</p>
              </div>
              <div className='flex text-[16px] '>
                  <p>Size: </p>
                  <div className="flex px-4 ">
                  {
                    data.map((item:any, index:any)=> (
                      <div key={index} className='cursor-pointer'>{item.size}</div>
                    ))
                  }
                  </div>
              </div>

                <div className="flex md:flex-row m-0">
                  <Counter/>
                </div>
              
              <div className="mt-6 ">
                  <Link href={'https://api.whatsapp.com/send?phone=963995817380'} className="bg-[#000000] w-full text-white py-2 px-4 hover:bg-[#cdcdcd]">
                      Book Your Order
                  </Link>
                  <AddToCartButton />
              </div>
              
        </div>
    </div>

  )
}


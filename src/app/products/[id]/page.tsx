
import React, { useContext } from 'react'
import { client } from '../../../lib/sanityClient'
import Image from 'next/image'
import { Image as IImage, useDataset } from 'sanity'
import { urlForImage } from '../../../../sanity/lib/image'

import Link from 'next/link'

const getServerSideProps:any = async (param='') => {

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


  const data= await getServerSideProps(param);
    
  //  const handleAddToCart = async () => {
  //   const res = fetch("/api/cart", {
  //       method: "POST",
  //       body:JSON.stringify({
  //           // product_id: item._id
  //       })
  //   })
  //  }

  return (
    
    <div className="w-full flex flex-col justify-center items-center my-20 px-4 md:flex md:justify-center">
  
        <div className=''>
            <Image
              src={urlForImage(data[0].image).url()}
              alt={"product image"}
              width={300}
              height={500} />
          </div>
          
          <div className="p-4">
              <div className="">
                <h1 className="text-2xl my-2">{data[0].title}</h1>
              </div>
              <div className="">
                <h1 className="text-lg my-2">{data[0].description}</h1>
              </div>
              <div className='text-2xl'>
                  <p> {data[0].price} AED</p>
                </div>
 
              {/* <div>
              <div className='ml-4' my-6><Counter /></div>
              </div> */}

              <div className='my-4'>

                <div className="">
                  <Link href={'https://api.whatsapp.com/send?phone=963995817380'}>
                    <button className="w-full bg-[#000] text-white p-2 hover:bg-[#000]">
                      Book Your Order
                    </button>
                  </Link>
                </div>
                  
              </div>
              
          </div>
    </div>

  )
}


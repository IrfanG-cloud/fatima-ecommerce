import { client } from "@/lib/sanityClient"
import React from "react"
import Image from 'next/image'
import { Image as IImage, useDataset } from 'sanity'
import { urlForImage } from "../../../../sanity/lib/image";
import Counter from "@/app/components/Counter";
import Link from "next/link";
import AddToCartButton from "@/app/components/AddToCardButton";


async function getAllProductsForSearch() {
    // const getProduct = await client.fetch(`*[_type == "products"]`);
    const getProduct = await client.fetch(`*[_type== 'product']`)
    console.log(getProduct)

    return getProduct;
    
}

const Search = async ({ params }: { params: { query: string} }) =>{
    const slug = (params.query).toLowerCase();

    const data = await getAllProductsForSearch()
    const dataToMap = await data.filter((item: any) => {
        
        if ((item.title).toLowerCase().indexOf(slug) >= 0) {
            return true
        }
        return false
    });

    
    return (
        <div className="w-full my-20 justify-center items-center px-4 md:flex">
         { dataToMap && dataToMap.map((items:any, index: any)=> (
        <>
            <div className=''>
                <Image
                     src={urlForImage(dataToMap[0].image).url()}
                     alt={"product image"}
                     width={300}
                     height={500} />
             </div>
             <div className="p-4 md:ml-8">
                     <div className="">
                         <h1 className="text-[20px] my-2">{dataToMap[0].title}</h1>
                     </div>
                     <div className="">
                         <h1 className="text-[16px] my-2">{dataToMap[0].description}</h1>
                     </div>
                     <div className='text-[20px]'>
                         <p> {dataToMap[0].price} AED</p>
                     </div>
                     <div className='flex text-[16px] '>
                         <p>Size: </p>
                         <div className="flex px-4 ">
                             
                                 <div key={index} className='cursor-pointer'>{dataToMap[0].size}</div>
                             
                         </div>
                     </div>

                     <div className="flex md:flex-row m-0">
                         <Counter />
                     </div>

                     <div className="mt-6 ">
                         <Link href={'https://api.whatsapp.com/send?phone=963995817380'} className="bg-[#000000] w-full text-white py-2 px-4 hover:bg-[#cdcdcd]">
                             Book Your Order
                         </Link>
                         <AddToCartButton />
                     </div>

                </div></>
         ))}
    </div>
    )
}

export default Search
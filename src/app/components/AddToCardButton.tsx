'use client';
import { useRouter } from 'next/navigation'

const AddToCartButton=()=>{

    const router = useRouter();

    return(
        <button onClick={()=>alert("Add your product in Cart ")} className="bg-[#cdcdcd] text-white ml-2 py-2 px-4 hover:bg-[#000000]">
            Add To Cart
        </button>
    )
         
    
}
export default AddToCartButton;
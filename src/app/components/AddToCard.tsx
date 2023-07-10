'use client';

import Link from "next/link";
import { useDispatch } from "react-redux";
import { cartActions } from "@/store/slice/cartSlice";

const AddToCart=()=>{

    const dispatch = useDispatch();
    const addItem = () =>{
        dispatch(cartActions.addToCart)
    }

    return
         
    
}
export default AddToCart;
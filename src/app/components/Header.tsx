"use client"

import Link from 'next/link';
import { useState } from "react";
import { FaBars, FaTimesCircle, FaCartPlus, FaSearch} from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from '@/store/store';
// import Image from 'next/image'


export default function Header() {
    const [navbar, setNavbar] = useState( false )

    const cartValue = useSelector(
        (state: RootState) => state.cartSlice.totalQuantity
    );

  return (
    <nav className='w-full justisfy-between fixed top-0 right-0 z-20 bg-white py-2'>
        <div className='justify-between px-6 mx-auto md:flex md:items-center md;px-8 lg:max-w-8xl'>
            <div className='w-full flex justify-between md:items-center md:py-0'>
                <span>
                <Link href="/">
                    <h1 className='text-2xl pt-1 text-black md:text-2xl md:pt-0'>Fatima<span className="text-[#999DA0]">Alhaj</span></h1>
                        {/* <Image
                            src="/logo.png"
                            alt="logo"
                            width={200}
                            height={200}
                            
                        /> */}
                    </Link>
                </span>
                <div className={`bg-white flex-1 justify-self-center pb-3 mt-13 md:block md:pb-0 md:mt-0 ${ navbar ? 'p-15 md:p-0 block' : 'hidden'}`}>
                    <ul className='h-screen justify-start items-center mt-20 md:h-auto md:flex md:ml-40 md:mt-0'>
                        <li className='after:text-left p-3 md:mb-4font-bold text-1xl md:text-[16px] md:px-4 hover:text-[var(--primary-color)] cursor-pointer'>
                            <Link href="/women" onClick={() => setNavbar(!navbar)}>Women</Link>
                        </li>
                        <li className='after:text-left p-3 md:mb-4font-bold text-1xl md:text-[16px] md:px-4 hover:text-[var(--primary-color)] cursor-pointer'>
                            <Link href="/men" onClick={() => setNavbar(!navbar)}>Men</Link>
                        </li>
                        <li className='after:text-left p-3 md:mb-4font-bold text-1xl md:text-[16px] md:px-4 hover:text-[var(--primary-color)] cursor-pointer'>
                            <Link href="/kids" onClick={() => setNavbar(!navbar)}>Kids</Link>
                        </li>
                        <li className='after:text-left p-3 md:mb-4font-bold text-1xl md:text-[16px] md:px-4 hover:text-[var(--primary-color)] cursor-pointer'>
                            <Link href="/bags" onClick={() => setNavbar(!navbar)}>Bags</Link>
                        </li>
                        <li className='after:text-left p-3 md:mb-4font-bold text-1xl md:text-[16px] md:px-4 hover:text-[var(--primary-color)] cursor-pointer'>
                            <Link href="/watches" onClick={() => setNavbar(!navbar)}>Watches</Link>
                        </li>
                        <li className='after:text-left p-3 md:mb-4font-bold text-1xl md:text-[16px] md:px-4 hover:text-[var(--primary-color)] cursor-pointer'>
                            <Link href="/sneakers" onClick={() => setNavbar(!navbar)}>Sneakers</Link>
                        </li>
                        <li className='after:text-left p-3 md:mb-4font-bold text-1xl md:text-[16px] md:px-4 hover:text-[var(--primary-color)] cursor-pointer'>
                            <Link href="/accessories" onClick={() => setNavbar(!navbar)}>Accessories</Link>
                        </li>
                        <li className='after:text-left p-3 md:mb-4font-bold text-1xl md:text-[16px] md:px-4 hover:text-[var(--primary-color)] cursor-pointer'>
                            <Link href="/products" onClick={() => setNavbar(!navbar)}>All Products</Link>
                        </li>
                    </ul>
                    
                </div>
                <div className='md:hidden'>
                    <button className='p-2 rounded-md outline-none text-2xl text-[var(--primary-color)]' onClick={() => setNavbar(!navbar)}>
                        {navbar ? <FaTimesCircle /> : <FaBars />}
                    </button>
                </div>

                {/* <div className='hidden border borbor-l-0 p-1 ml-2 mr-4 md:flex'>
                    <FaSearch className='pt-1'/>
                    <input className='ml-2 mr-2 w-[350px] ' type="text" placeholder="What you looking for"  />
                </div> */}
                
                
                {/* <div className='md:flex'>
                    <Link href="/checkout">
                        <button>
                            <span className='text-[#fa0404]'>{cartValue}</span>
                            <FaCartPlus className='w-6 h-6 '/>
                        </button>
                    </Link>
                   
                </div>
                <div className='mx-4 md:flex'>
                    <Link href='sign-up' className="mx-1 px-4 py-2 bg-black text-white">
                        <button>Login</button>
                    </Link>
                    <Link href='sign-up' className="mx-1 p-2 hover:bg-black text-black hover:text-white">
                        <button>Sign up</button>
                    </Link>
                </div> */}
            </div>
        </div>
    </nav>
  )
}


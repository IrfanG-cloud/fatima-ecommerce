import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className='w-full bg-[#000]'>
      <div className='justify-between px-6 py-10 md:flex lg:flex'>
        <div className='text-[#4f4f4f] pointer py-4 text-center md:text-start'> 
          <div className='' >
          <h3 className='text-2xl font-bold mb-2 '>O Dine Market</h3>
          <p className='py-4'>Small, artisan label that offers a thoughtfully curated <br/>collection of high quality everyday essentials made.</p>
          </div>
         <div className='py-4 '>
          <Link href="" className='mr-3'>
            <span className=' text-[#4f4f4f] hover:text-[#fff]'>Twitter</span>
          </Link> 
          <Link href="" className='mr-3'>
          <span className=' text-[#4f4f4f] hover:text-[#fff]'>Facebook</span>
          </Link>
          <Link href="" className='mr-3'>
          <span className=' text-[#4f4f4f] hover:text-[#fff]'>Linkdin</span>
          </Link>
          </div>
        </div>


        <div className='text-[#4f4f4f] py-4 text-center md:text-start'>
          <h3 className='text-2xl font-bold mb-4'>Company</h3>
          <ul className=''>
            <Link href=""><li className=' text-[#4f4f4f] hover:text-[#fff] mb-2'>About</li></Link>
            <Link href=""><li className=' text-[#4f4f4f] hover:text-[#fff] mb-2'>Term of use</li></Link>
            <Link href=""><li className=' text-[#4f4f4f] hover:text-[#fff] mb-2'>Privacy Policy</li></Link>
          </ul>
        </div>
        <div className='text-[#4f4f4f] py-4 text-center md:text-start'>
          <h3 className='text-2xl font-bold mb-4'>Support</h3>
          <ul className=''>
            <Link href="" className=' text-[#4f4f4f] hover:text-[#fff] mb-2'><li>Support </li></Link>
            <Link href="" className=' text-[#4f4f4f] hover:text-[#fff] mb-2'><li>24h Service</li></Link>
            <Link href="" className=' text-[#4f4f4f] hover:text-[#fff] mb-2'><li>Quick Chat</li></Link>
            <Link href="" className=' text-[#4f4f4f] hover:text-[#fff] mb-2'><li>How it works</li></Link>
            <Link href="" className=' text-[#4f4f4f] hover:text-[#fff] mb-2'><li>Contact us</li></Link>
          </ul>
        </div>
        <div className='text-[#4f4f4f] py-4 text-center md:text-start'>
          <h3 className='text-2xl font-bold mb-4'>Contact</h3>
          <ul className=''>
            <Link href="" className=' text-[#4f4f4f] hover:text-[#fff] mb-2'><li>Whatsapp </li></Link>
            <Link href="" className=' text-[#4f4f4f] hover:text-[#fff] mb-2'><li>Support 24h</li></Link>
            
          </ul>
        </div>
      </div>
    <div className="text-center text-[#4f4f4f] border-t-2 border-[#1d1d1d] py-4">
          All right reserved &copy; O-Dine-Market {(new Date()).getFullYear()}
    </div>
    </div>
  )
}

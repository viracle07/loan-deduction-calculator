import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <main className='bg-black text-white py-5 px-10 flex flex-col space-y-3 items-center justify-center'>
        <div>
            <Link href={'#'} className='flex items-center gap-1'>
          <Image
            src={'/logo1.png'}
            alt='logo'
            width={800}
            height={800} className='h-10 w-10' />
          <p className='font-bold text-lg'>LDC</p>
        </Link> 
        </div>

        <p className='text-xs text-yellow-400 font-semibold'>
          crafted by VIRACLE
        </p>
    </main>
  )
}

export default Footer

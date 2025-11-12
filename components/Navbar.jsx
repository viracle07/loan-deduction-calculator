"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";



const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false)

  const navItems = [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
  ]
  return (
    <main className='relative sticky top-0 z-50 bg-black py-3 px-4 lg:px-10 flex items-center gap-[30rem] text-yellow-500'>
      <div className='flex items-center gap-15'>
        <button onClick={() => setNavOpen(!navOpen)} className='lg:hidden text-2xl font-bold z-40'>
          {navOpen ? <IoCloseSharp className='lg:hidden text-3xl' /> : <FaBars className='lg:hidden text-2xl ' />}

        </button>
        <Link href={'#'} className='flex items-center gap-1'>
          <Image
            src={'/logo1.png'}
            alt='logo'
            width={800}
            height={800} className='h-10 w-10' />
          <p className='font-bold text-lg'>LDC</p>
        </Link>
      </div>

      <div className="lg:flex items-center gap-10 max-lg:hidden font-semibold">
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.url}
            className='hover:underline hover:text-red-100'
          >
            {item.label}
          </Link>
        ))}
      </div>
      
      {/* mobile navbar */}
      <div className={`lg:hidden bg-black h-70 w-50 absolute top-full left-0  transition-all duration-500 overflow-hidden items-center flex flex-col gap-10 pt-10 ${navOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-x-10 pointer-events-none"} `}>
        <Link onClick={() => setNavOpen(false)} href={"/"} className='text-yelllow-400 hover:text-red-100 transition-all duration-150 text-lg hover:bg-green-800/25 px-2 rounded-lg' >Home</Link>


        <Link onClick={() => setNavOpen(false)} href={"/about"} className='flex items-center gap-1 text-yelllow-400 hover:text-red-100 transition-all duration-150 text-lg hover:bg-green-800/25 px-2 rounded-lg'>About
        </Link>

      </div>


    </main>
  )
}

export default Navbar

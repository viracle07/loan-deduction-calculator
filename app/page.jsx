'use client'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
const page = () => {
  const videoRef = useRef(null)
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.3
    }
  }, [])
  return (
    <main className='min-h-dvh bg-black'>
      <div className="relative w-full min-h-dvh overflow-hidden">
        {/* Background video */}
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/bg1.mp4"
          autoPlay
          loop
          muted
        />
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/85"></div>
        {/* Content */}
        <div className="relative z-10 flex flex-col mt-30 h-full text-white space-y-25 px-4 lg:px-10">
          <div className='flex flex-col space-y-7'>
            <h1 className="lg:text-5xl text-4xl  max-md:text-center font-bold text-yellow-400">Loan Deduction Calculator</h1>
            <p className="lg:text-lg max-md:text-center text-sm max-w-xl text-gray-300">Easily calculate your monthly deductions in seconds. Plan smarter, borrow confidently, and stay in control of your finances.
            </p>
          </div>

          <div className='flex max-md:items-center flex-col max-md:justify-center space-y-3'>
            <Link href={'/mutual'}>
              <div className='rounded-lg bg-yellow-400 max-md:text-sm px-5 py-3 w-fit text-black font-semibold hover:bg-red-100'>Click here to calculate</div>
            </Link>
            <p className='text-xs text-gray-500'>Calculate your deductions with Mutual Trust MFB</p>
          </div>


        </div>
      </div>
    </main>
  )
}
export default page
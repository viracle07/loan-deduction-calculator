"use client"
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
        <div className="relative z-10 flex flex-col h-full text-white mt-10 space-y-5 lg:text-md text-sm px-4 lg:px-10">
          <h1 className='text-yellow-400 lg:text-2xl text-xl font-bold'>About Loan Deduction Calculator</h1>

          <p>The Loan Deduction Calculator is your stress-free, no-drama way to understand how a loan will affect your salary. No more guessing, no more confusion, no more “hope for the best” calculations. With just a few clicks, you get a clear picture of what your monthly deductions will look like—simple, fast, and straight to the point.</p>

          <div className=' lg:h-150 flex items-center justify-center w-auto rounded-md py-5'>
            <img className='lg:h-150 lg:w-screen' src="pic2.jpg" alt="images" />

          </div>
          <p>
            Just tell the calculator how much you want to borrow, how much you earn, and how long you want to repay, and boom—your monthly deduction appears instantly. It also shows the total amount you’ll pay back, giving you full control over your financial decisions.
          </p>

          <p>
            Whether you're planning ahead, avoiding surprises at the end of the month, or just love knowing exactly where your money is going, this tool has your back. Employers and financial institutions can also rely on it to get accurate payroll deductions without breaking a sweat.
          </p>

          <p>
            The website is built to be fast, reliable, and easy for anyone to use. With a clean interface and real-time calculation features, users get instant results without needing advanced financial knowledge. It provides clarity, prevents confusion, and helps both customers and lenders make informed decisions.
          </p>

          <div className='lg:h-100 w-auto rounded-md flex items-center justify-center py-5'>
            <img src="pic1.jpg" alt="images" className='lg:h-100' />

          </div>
          <p className='pb-10'>
            In short, the Loan Deduction Calculator helps you stay on top of your money by showing exactly what you’ll pay, and how it fits into your salary, all with ease and style.
          </p>
        </div>
      </div>
    </main>
  )
}

export default page

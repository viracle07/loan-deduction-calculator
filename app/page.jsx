'use client'
import React, { useEffect, useRef } from 'react'
const page = () => {
  const videoRef = useRef(null)
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5
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
        <div className="absolute top-0 left-0 w-full h-full bg-black/80"></div>
        {/* Content */}
        <div className="relative z-10 flex flex-col mt-20 h-full text-white px-4">
          <h1 className="lg:text-3xl text-2xl font-bold text-yellow-500 mb-4">Loan Deduction Calculator</h1>
          <p className="lg:text-md text-sm max-w-xl">
            .....
          </p>
        </div>
      </div>
    </main>
  )
}
export default page
'use client'
import React, { useEffect, useRef, useState } from 'react'


const page = () => {
    const [salary, setSalary] = useState("");
    const [amount, setAmount] = useState("");
    const [tenor, setTenor] = useState("");
    const [ded1, setDed1] = useState("");
    const [ded2, setDed2] = useState("");
    const [ded3, setDed3] = useState("");

    const [result, setResult] = useState(null);



    // Bg video playback rate
    const videoRef = useRef(null)
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.3
        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();

        // MT Loan deduction formula
        const loanDeduction = amount / tenor + amount * 0.05;

        // Other deductions
        const otherDeductions = Number(ded1) + Number(ded2) + Number(ded3);

        // Salary after other deductions
        const finalSalary = salary - otherDeductions;

        // Final result after MT deduction
        const finalResult = finalSalary - loanDeduction;

        // Eligibility rule
        const eligibility =
            finalResult >= 30000 ? "Eligible to get loan" : "Not Eligible based on Salary after deduction is not up to 30,000 naira";

        setResult({
            loanDeduction,
            otherDeductions,
            finalSalary,
            finalResult,
            eligibility,
        });

        setSalary("");
        setAmount("");
        setTenor("");
        setDed1("");
        setDed2("");
        setDed3("");
    };
    return (
        <main className='min-h-dvh'>
            <div className="relative w-full min-h-dvh overflow-hidden">
                {/* Background video */}
                <video
                    ref={videoRef}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src="/bg2.mp4"
                    autoPlay
                    loop
                    muted
                />
                {/* Overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-black/75"></div>
                {/* Content */}
                <div className="relative z-10 flex items-center flex-col justify-center mt-10 h-full text-white space-y-10 px-4 lg:px-10 pb-15">
                    <h1 className='text-sm text-center text-gray-400 italic'>Please fill in your salary, loan amount, and preferred tenor. Once completed, click Calculate to see your estimated monthly deductions.</h1>
                    <form onSubmit={handleSubmit}
                        className='text-white w-auto h-auto flex flex-col items-center justify-center space-y-5'>

                        <div className='flex flex-col gap-1'>
                            <label className='font-semibold text-gray-400' >Salary</label>
                            <input type="number" value={salary} onChange={(e) => setSalary(Number(e.target.value))} className='border-2 border-yellow-500 w-80 lg:w-100 p-2 hover:border-1 hover:translate-x-2 transition-all duration-300 ' />
                        </div>

                        <div className='flex flex-col gap-1'>
                            <label className='font-semibold text-gray-400' >Amount Requested</label>
                            <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))}
                                className='border-2 border-yellow-500 w-80 lg:w-100 p-2 hover:border-1 hover:translate-x-2 transition-all duration-300  ' />
                        </div>

                        <div className='flex flex-col gap-1'>
                            <label className='font-semibold text-gray-400' >Tenor</label>
                            <input type="number" value={tenor} onChange={(e) => setTenor(Number(e.target.value))}
                                className='border-2 border-yellow-500 w-80 lg:w-100 p-2 hover:border-1 hover:translate-x-2 transition-all duration-300 ' />
                        </div>

                        <h1 className='w-100 text-center text-gray-400 text-xs'>Do you have loans with other microfinance banks? if Yes, provide deductions for each below. If No, continue to calculate</h1>

                        <div className='flex flex-col gap-1'>
                            <label className='font-semibold text-gray-400' >Deduction 1</label>
                            <input type="number" value={ded1} onChange={(e) => setDed1(Number(e.target.value))}
                                className='border-2 border-yellow-500 w-80 lg:w-100 p-2 hover:border-1 hover:translate-x-2 transition-all duration-300' />
                        </div>

                        <div className='flex flex-col gap-1'>
                            <label className='font-semibold text-gray-400' >Deduction 2</label>
                            <input type="number" value={ded2} onChange={(e) => setDed2(Number(e.target.value))}
                                className='border-2 border-yellow-500 w-80 lg:w-100 p-2 hover:border-1 hover:translate-x-2 transition-all duration-300' />
                        </div>

                        <div className='flex flex-col gap-1'>
                            <label className='font-semibold text-gray-400' >Deduction 3</label>
                            <input type="number" value={ded3} onChange={(e) => setDed3(Number(e.target.value))}
                                className='border-2 border-yellow-500 w-80 lg:w-100 p-2 hover:border-1 hover:translate-x-2 transition-all duration-300' />
                        </div>

                        <button type='submit' className=' w-80 lg:w-100 text-black font-semibold cursor-pointer py-2 rounded-md bg-yellow-400 hover:bg-red-100 hover:text-yellow-600 transition-all duration-200  '>Calculate</button>

                    </form>

                    {result && (
                        <div className="mt-8 bg-gray-800 p-6 rounded-lg w-80 lg:w-100 space-y-2 animate-slideFade">
                            <p>Loan Deduction: ₦{result.loanDeduction.toLocaleString(undefined, {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                            })}</p>
                            <p>Salary after deduction: ₦{result.finalResult.toLocaleString(undefined, {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                            })}</p>


                            <h2 className="text-lg font-bold text-gray-400 mt-3">
                                {result.eligibility}
                            </h2>
                            <p className='text-xs text-yellow-400 font-semibold'>N/B: This result is subject to change because of loan found on credit bureau and other credit checks</p>
                        </div>
                    )}
                </div>
            </div>

        </main>
    )
}

export default page

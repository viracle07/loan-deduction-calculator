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

    // Format number with commas while typing
    const formatNumber = (value) => {
        if (!value) return "";
        const rawValue = value.replace(/,/g, "");
        if (isNaN(rawValue)) return "";
        return Number(rawValue).toLocaleString();
    };

    // Remove commas for calculations
    const parseNumber = (value) => Number(value.replace(/,/g, "")) || 0;

    const handleSubmit = (e) => {
        e.preventDefault();

        const salaryNum = parseNumber(salary);
        const amountNum = parseNumber(amount);
        const tenorNum = Number(tenor) || 1;

        const ded1Num = parseNumber(ded1);
        const ded2Num = parseNumber(ded2);
        const ded3Num = parseNumber(ded3);

        const loanDeduction = amountNum / tenorNum + amountNum * 0.05;
        const otherDeductions = ded1Num + ded2Num + ded3Num;
        const finalSalary = salaryNum - otherDeductions;
        const finalResult = finalSalary - loanDeduction;

        const eligibility =
            finalResult >= 30000
                ? "Eligible to get loan"
                : "Not Eligible based on Salary after deduction is not up to 30,000 naira";

        setResult({
            loanDeduction,
            finalResult,
            eligibility,
        });

        // Clear form
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
                    <h1 className='text-sm text-center text-gray-400 italic'>
                        Please fill in your salary, loan amount, and preferred tenor. Once completed, click Calculate to see your estimated monthly deductions.
                    </h1>

                    <form
                        onSubmit={handleSubmit}
                        className='flex flex-col items-center space-y-5'
                    >
                        {/* Salary */}
                        <div className='flex flex-col gap-1'>
                            <label className='font-semibold text-gray-400'>Salary</label>
                            <input
                                type="text"
                                inputMode="numeric"
                                value={salary}
                                onChange={(e) => setSalary(formatNumber(e.target.value))}
                                className='border-2 border-yellow-500 w-80 lg:w-100 p-2 transition-all hover:border-1 hover:translate-x-2 transition-all duration-300
'
                            />
                        </div>

                        {/* Amount */}
                        <div className='flex flex-col gap-1'>
                            <label className='font-semibold text-gray-400'>Amount Requested</label>
                            <input
                                type="text"
                                inputMode="numeric"
                                value={amount}
                                onChange={(e) => setAmount(formatNumber(e.target.value))}
                                className='border-2 border-yellow-500 w-80 lg:w-100 p-2 transition-all hover:border-1 hover:translate-x-2 transition-all duration-300
'
                            />
                        </div>

                        {/* Tenor (no commas needed) */}
                        <div className='flex flex-col gap-1'>
                            <label className='font-semibold text-gray-400'>Tenor</label>
                            <input
                                type="number"
                                min="1"
                                value={tenor}
                                onChange={(e) => setTenor(e.target.value)}
                                className='border-2 border-yellow-500 w-80 lg:w-100 p-2 transition-all hover:border-1 hover:translate-x-2 transition-all duration-300
'
                            />
                        </div>

                        <h1 className='text-center text-gray-400 text-xs'>
                            Other loan deductions (if any)
                        </h1>

                        {/* Deductions */}
                        {[ded1, ded2, ded3].map((ded, i) => (
                            <div key={i} className='flex flex-col gap-1'>
                                <label className='font-semibold text-gray-400'>
                                    Deduction {i + 1}
                                </label>
                                <input
                                    type="text"
                                    inputMode="numeric"
                                    value={ded}
                                    onChange={(e) => {
                                        const setters = [setDed1, setDed2, setDed3];
                                        setters[i](formatNumber(e.target.value));
                                    }}
                                    className='border-2 border-yellow-500 w-80 lg:w-100 p-2 transition-all hover:border-1 hover:translate-x-2 transition-all duration-300
'
                                />
                            </div>
                        ))}

                        <button
                            type='submit'
                            className='w-80 lg:w-100 text-black font-semibold py-2 rounded-md bg-yellow-400 hover:bg-red-100 transition-all'
                        >
                            Calculate
                        </button>
                    </form>

                    {result && (
                        <div className="mt-8 bg-gray-800 p-6 rounded-lg w-80 lg:w-100 space-y-2">
                            <p>
                                Loan Deduction: ₦
                                {result.loanDeduction.toLocaleString(undefined, {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                })}
                            </p>

                            <p>
                                Salary after deduction: ₦
                                {result.finalResult.toLocaleString(undefined, {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                })}
                            </p>

                            <h2 className="text-lg font-bold text-gray-400 mt-3">
                                {result.eligibility}
                            </h2>

                            <p className='text-xs text-yellow-400 font-semibold'>
                                N/B: This result is subject to change because of loan found on credit bureau and other credit checks.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </main>
    )
}

export default page

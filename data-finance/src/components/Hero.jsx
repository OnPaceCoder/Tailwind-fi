import React from 'react'
import Typed from 'react-typed'
const Hero = () => {
    return (
        <div className='w-full  text-white flex flex-col justify-center items-center h-screen mt-[-96px] text-center'>
            <div className='max-w-[800-px] flex flex-col items-center'>
                <p className='text-[#00df9a] font-bold p-2 text-md sm:text-xl '>GROWING WITH DATA ANALYTICS</p>
                <h1 className='text-4xl md:text-6xl lg:text-8xl font-bold py-4'>Grow with data</h1>
                <div className='flex text-2xl  font-bold mb-4'>
                    <p>Fast, flexible financing for</p>
                    <Typed
                        className='pl-1'
                        strings={['BTB', 'BTC', 'SASS']}
                        typeSpeed={120}
                        backSpeed={140}
                        loop
                    />

                </div>

                <p className='  text-xl md:text-2xl font-bold text-gray-500 px-3'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
                <button className='font-semibold text-black px-10 bg-[#00df9a] hover:scale-110 ease-in-out duration-500 py-3 rounded mt-4'>Get Started</button>

            </div>
        </div>
    )
}

export default Hero
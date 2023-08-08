import React from 'react'

const Contact = () => {
    return (
        <div className='w-full'>
            <div className='max-w-[1044px] grid md:grid-cols-3 bg-black text-white mx-auto py-24 px-3'>
                <div className='md:col-span-2 mb-8 : sm:mb-0 '>
                    <p className=' md:text-3xl text-2xl font-bold'>Want tips & tricks to optimize your flow?</p>
                    <p className=' lg:2xl mt-2'>Sign up to our newsletter and stay up to date.</p>
                </div>
                <div className='md:col-span-1'>
                    <div className='flex gap-4 flex-col sm:flex-row '>

                        <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-gray-500 focus:ring-black-500 focus:ring-1 sm:text-sm text-slate-500" placeholder="Enter Email" type="email" name="search" />

                        <button className='btn w-[200px] rounded bg-[#00df9a] text-black py-2 px-6  hover:scale-110 ease-in-out duration-500 mx-auto '>Notify Me</button>
                    </div>
                    <div className='mt-4'>
                        We care bout the protection of your data. Read our
                        <span className='text-[#00df9a] ml-2'>

                            Privacy Policy.
                        </span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contact
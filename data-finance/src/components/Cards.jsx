import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'
const Cards = () => {
    return (
        <div className='bg-white py-12'>

            <div className='grid md:grid-cols-3 sm:gap-10 px-8 gap-10'>
                <div className="text-center shadow-xl hover:scale-110 ease-in-out duration-500 w-full p-8 my-2">
                    <img src={Single} className='h-16 mx-auto ' alt="" />
                    <h1 className='font-bold text-xl md:text-2xl pt-7'>Single User</h1>
                    <p className='font-bold text-2xl md:text-3xl py-7'>$149</p>
                    <div className='flex gap-3 flex-col'>
                        <p>500 GB Storage</p>
                        <hr className='w-[70%]  mx-auto' />
                        <p>1 Granted User</p>
                        <hr className='w-[70%]  mx-auto' />
                        <p>Send up to 2GB</p>
                        <hr className='w-[70%]  mx-auto' />
                    </div>
                    <button className='font-semibold text-black px-10 bg-[#00df9a]  py-3 rounded mt-4'>Start Trial</button>

                </div>
                <div className="text-center shadow-2xl bg-slate-100 hover:scale-110 ease-in-out duration-500 w-full p-8 ">
                    <img src={Double} className='h-16 mx-auto ' alt="" />
                    <h1 className='font-bold text-xl md:text-2xl pt-7'>Double User</h1>
                    <p className='font-bold text-2xl md:text-3xl py-7'>$149</p>
                    <div className='flex gap-3 flex-col'>
                        <p>500 GB Storage</p>
                        <hr className='w-[70%]  mx-auto' />
                        <p>1 Granted User</p>
                        <hr className='w-[70%]  mx-auto' />
                        <p>Send up to 2GB</p>
                        <hr className='w-[70%]  mx-auto' />
                    </div>
                    <button className='font-semibold bg-black px-10 text-[#00df9a]  py-3 rounded mt-4'>Start Trial</button>

                </div>
                <div className="text-center shadow-xl hover:scale-110 ease-in-out duration-500
                w-full p-8 my-2">
                    <img src={Triple} className='h-16 mx-auto ' alt="" />
                    <h1 className='font-bold text-xl md:text-2xl pt-7'>Triple User</h1>
                    <p className='font-bold text-2xl md:text-3xl py-7'>$149</p>
                    <div className='flex gap-3 flex-col'>
                        <p>500 GB Storage</p>
                        <hr className='w-[70%]  mx-auto' />
                        <p>1 Granted User</p>
                        <hr className='w-[70%]  mx-auto' />
                        <p>Send up to 2GB</p>
                        <hr className='w-[70%]  mx-auto' />
                    </div>
                    <button className='font-semibold text-black px-10 bg-[#00df9a]  py-3 rounded mt-4'>Start Trial</button>

                </div>

            </div>

        </div>
    )
}

export default Cards
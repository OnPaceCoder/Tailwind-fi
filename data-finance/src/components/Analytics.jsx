import React from 'react'
import Laptop from "../assets/laptop.jpg"

const Analytics = () => {
    return (
        <div className='w-full text-black bg-white py-24'>
            <div className='max-w-[1024px] grid md:grid-cols-2 mx-auto'>
                <div>
                    <img className='w-[500px]' src={Laptop} alt="" />
                </div>
                <div className='px-4 py-5'>
                    <p className='text-[#00df9a] font-bold text-xl'>DATA ANALYTICS DASHBOARD</p>
                    <p className='font-bold text-2xl py-2'>Manage Data Analytics Centrally</p>
                    <p className='md:text-lg'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
                        molestiae delectus culpa hic assumenda, voluptate reprehenderit
                        dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
                        eveniet ex deserunt fuga?</p>

                    <button className=' bg-black px-10 py-3 flex  mx-auto md:mx-0 text-[#00df9a] hover:scale-110 ease-in-out duration-500  rounded mt-6 font-semibold  s'>Get Started</button>


                </div>
            </div>
        </div>
    )
}

export default Analytics
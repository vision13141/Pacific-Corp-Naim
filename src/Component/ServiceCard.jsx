import React from 'react'
import 'remixicon/fonts/remixicon.css'
const ServiceCard = ({ src }) => {
    return (
        <div className='w-[370px] h-[377px]  rounded-xl hover:translate-y-[-8vh] duration-75 ease-linear group'>
            <img src={src} alt="" className='mx-auto mt-[40px]' />
            <h1 className='text-[25px] leading-[32px] mt-[20px] group-hover:text-[28px]'>Home insurance</h1>
            <p className='w-[280px] mx-auto py-[20px] group-hover:text-[16px]'>Home insurance is a type of insurance policy that provides cover for your home.</p>
            <button className='flex items-center gap-[5px] mx-auto'>
                <h3>Learn more</h3>
                <i className="ri-arrow-right-line pt-[5px]"></i>
            </button>
        </div>
    )
}

export default ServiceCard
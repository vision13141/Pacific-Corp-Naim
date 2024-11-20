import React from 'react'
import 'remixicon/fonts/remixicon.css'
const ServiceCard = ({ src }) => {
    return (
        <div className='xl:w-[370px] xl:h-[377px] w-[320px] sm:w-full md:w-[40vw] h-[325px] shadow-md rounded-xl xl:hover:translate-y-[-3vh] hover:translate-y-[-2vh] duration-300 ease-linear hover:border-cmc hover:border-2 group'>
            <img src={src} alt="" className='mx-auto xl:mt-[40px] mt-[20px] mb-[1vw]' />
            <h1 className='xl:text-[25px] text-[20px] md:text-[2.7vw] md:leading-[2vw] leading-[32px] mt-[30px]'>Home insurance</h1>
            <p className='xl:w-[280px] w-[280px] mx-auto xl:px-0 px-[10px] xl:py-[20px] py-[6px] group-hover:text-[16px]'>Home insurance is a type of insurance policy that provides cover for your home.</p>
            <button className='flex items-center gap-[5px] mx-auto'>
                <h3 className='max-sm:text-[16px]'>Learn more</h3>
                <i className="ri-arrow-right-line pt-[5px]"></i>
            </button>
        </div>
    )
}

export default ServiceCard
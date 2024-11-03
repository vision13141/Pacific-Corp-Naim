import React from 'react'

const BenefitsCard = ({ src, text, prh }) => {
    return (
        <div className='w-[370px] h-[350px] flex flex-col justify-center rounded-2xl border-[2px]'>
            {/* <img src={src} alt="" className='mx-auto mt-[40px]' /> */}
            <div>{src}</div>
            <h1 className='text-[25px] leading-[32px] mt-[20px] group-hover:text-[28px]'>{text}</h1>
            <p className='w-[300px] mx-auto py-[20px] group-hover:text-[17px]'>{prh}</p>
        </div>
    )
}

export default BenefitsCard
import React from 'react'
import { FaRegStar } from "react-icons/fa6";
import Paragraph from './Paragraph';
import { FaCheckCircle } from "react-icons/fa";
import girl from '../assets/girl.png'




const TestimonialCard = () => {
    const star = [1, 2, 3, 4, 5]

    return (
        <div className='w-[370px] sm:w-full md:w-[46vw] xl:!w-[360px] h-[330px] xl:px-[35px] px-[20px] shadow-md'>
            <div className="flex gap-1 pt-[50px]">
                {
                    star.map((el, idx) => {
                        return (
                            <FaRegStar key={idx} className='text-[#F3A100] text-2xl' />
                        )
                    })
                }
            </div>

            <Paragraph
                className={`text-left xl:!w-[300px] w-[255px] leading-[32px] mt-[20px] md:!w-[40vw]`}
                text={`I received great customer service from the specialists who helped me. I would to recommend anyone who wants quality.`} />

            <div className="flex items-center gap-3 pt-8">
                <img src={girl} alt="" className='h-[40px] w-[40px] rounded-full' />
                <div className="">
                    <h3 className='text-left font-semibold text-xl'>Viola Manisa</h3>
                    <h5 className='font-sans italic flex items-center gap-2'><FaCheckCircle className='text-[#36B37E]' /> Verified customer</h5>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard
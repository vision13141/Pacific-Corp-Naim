import React from 'react'
import Cmbutton from '../Component/Cmbutton'
import heroImg from '../assets/heroImg.png'

const Hero = () => {
    return (
        <div className='flex items-center justify-between mt-[50px] max-sm:mt-1'>

            <div className="">
                <h1 className='font-bold font-sans xl:text-[70px] text-title xl:leading-[85px] text-[8vw] sm:text-[5vw] md:text-[6vw] leading-[9vw] sm:leading-[50px] md:leading-[7vw] w-[85vw] sm:w-[350px] md:w-[50vw] xl:w-[680px] text-left'>We Are Ready To Make Your New Life Happier.</h1>
                <p
                    className='xl:w-[40vw] w-[50vw] text-left max-sm:text-[2.5vw] sm:text-[2vw] leading-[3vw] md:text-[1.9vw] xl:text-[1.5vw] xl:!leading-[2.1vw] text-cmgc xl:my-[30px] my-[15px]'>
                    We work with several leading insurance companies to secure insurance coverages tailored to meet your needs.
                </p>
                <Cmbutton text={`Get a consultation`} className={`xl:!w-[246px] md:!w-[30vw] w-[180px] mt-[10px]`} />
            </div>

            <div className="max-sm:hidden">
                <img src={heroImg} alt="" className='sm:w-[30vw] xl:w-[350px]' />
            </div>
        </div>
    )
}

export default Hero
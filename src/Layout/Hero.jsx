import React from 'react'
import Cmbutton from '../Component/Cmbutton'
import heroImg from '../assets/heroImg.png'

const Hero = () => {
    return (
        <div className='flex items-center mt-[50px]'>

            <div className="">
                <h1 className='font-bold font-sans text-[70px] text-title w-[680px] leading-[85px] text-left'>We Are Ready To Make Your New Life Happier.</h1>
                <p className=' w-[627px] text-[20px] text-cmgc my-[30px]'>
                    We work with several leading insurance companies to secure insurance coverages tailored to meet your needs.
                </p>
                <Cmbutton text={`Get a consultation`} className={`w-[246px] mt-[10px]`} />
            </div>

            <div className="">
                <img src={heroImg} alt="" />
            </div>
        </div>
    )
}

export default Hero
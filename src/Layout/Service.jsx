import React from 'react'
import Subtitle from '../Component/Subtitle'
import Title from '../Component/Title'
import Paragraph from '../Component/Paragraph'
import ServiceCard from '../Component/ServiceCard'
import home from '../assets/home.png'
import hand from '../assets/hand.png'
import car from '../assets/car.png'
import quotation from '../assets/quotation.png'
import { FaCheckCircle } from "react-icons/fa";



const Service = () => {
    return (
        <div className='w-[100%] min-h-[100vh] pt-[100px]'>
            <Subtitle text={`OUR SERVICES`} />
            <Title text={`Insurance made simple for you`} className={`mt-[20px]`} />
            <Paragraph className={`mx-auto mt-[16px]`} text={`We work with several leading insurance companies to secure insurance coverages tailored to meet your needs.`} />

            <div className="xl:pt-[7vw] xl:flex-row xl:justify-between max-sm:mt-[8vw] sm:mt-[8vw] flex flex-col md:flex-row md:justify-center md:flex-wrap items-center gap-8">
                <ServiceCard src={home} />
                <ServiceCard src={hand} />
                <ServiceCard src={car} />
            </div>

            <div className="xl:h-[587px] h-[350px] sm:full sm:px-5 xl:mt-[80px] mt-[60px] flex items-center xl:bg-man bg-no-repeat bg-center bg-cover">
                <div className="xl:w-[447px]  xl:h-[499px] max-sm:pb-[20px] pb-[20px] max-sm:px-5 sm:px-5 bg-[#FFFF] shadow-md rounded-xl xl:pt-[60px] xl:ml-[40px] xl:px-[50px]">
                    <img src={quotation} alt="" className='' />
                    <h4 className='font-sans font-semibold text-cmgc xl:text-[25px] sm:w-full pt-[20px] text-[18px]'>This platform is one of the best companies I have dealt with in Indonesia. They’re always happy to help, and i wouldn’t hesitate to recommend them.</h4>

                    <h3 className='text-left pt-[15px]'>Daniel Anderson</h3>

                    <h5 className='font-sans italic flex items-center gap-2 mt-5'><FaCheckCircle className='text-[#36B37E]' /> Verified customer</h5>
                </div>
            </div>

        </div>
    )
}

export default Service
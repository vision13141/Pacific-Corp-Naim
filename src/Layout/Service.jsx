import React from 'react'
import Subtitle from '../Component/Subtitle'
import Title from '../Component/Title'
import Paragraph from '../Component/Paragraph'
import ServiceCard from '../Component/ServiceCard'
import home from '../assets/home.png'
import hand from '../assets/hand.png'
import car from '../assets/car.png'
import man from '../assets/man.png'
import quotation from '../assets/quotation.png'
import { FaCheckCircle } from "react-icons/fa";



const Service = () => {
    return (
        <div className='w-[100%] min-h-[100vh] pt-[100px]'>
            <Subtitle text={`OUR SERVICES`} />
            <Title text={`Insurance made simple for you`} className={`pt-[25px]`} />
            <Paragraph className={`mx-auto mt-[16px]`} text={`We work with several leading insurance companies to secure insurance coverages tailored to meet your needs.`} />

            <div className="pt-[5vw] flex justify-between">
                <ServiceCard src={home} />
                <ServiceCard src={hand} />
                <ServiceCard src={car} />
            </div>


            <div style={{ backgroundImage: `url(${man})`, backgroundRepeat: `no-repeat`, backgroundSize: `cover`, backgroundPosition: `center` }} className="h-[587px] mt-[100px] flex items-center">
                <div className="w-[447px] h-[499px] bg-[#FFFF] shadow-xl rounded-xl pt-[60px] ml-[40px] px-[50px]">
                    <img src={quotation} alt="" className='' />
                    <h4 className='font-sans font-semibold text-cmgc text-[25px] pt-[20px]'>This platform is one of the best companies I have dealt with in Indonesia. They’re always happy to help, and i wouldn’t hesitate to recommend them.</h4>

                    <h3 className='text-left pt-[15px]'>Daniel Anderson</h3>

                    <h5 className='font-sans italic flex items-center gap-2 mt-5'><FaCheckCircle className='text-[#36B37E]' /> Verified customer</h5>
                </div>
            </div>
        </div>
    )
}

export default Service
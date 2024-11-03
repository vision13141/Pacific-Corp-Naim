import React from 'react'
import Paragraph from '../Component/Paragraph'
import Subtitle from '../Component/Subtitle'
import Title from '../Component/Title'
import BenefitsCard from '../Component/BenefitsCard'
import { LiaReact } from "react-icons/lia";


const Benefits = () => {
    return (
        <div className='w-[100%] min-h-[100vh] pt-[110px]'>
            <Subtitle text={`your benefits`} />
            <Title className={`my-[25px]`} text={`We’re Your Right Insurance Advocate`} />
            <Paragraph cla text={`We work with several leading insurance companies to secure insurance coverages tailored to meet your needs.`} className={`mx-auto`} />


            <div className="flex flex-wrap justify-center gap-8 mt-10">
                <BenefitsCard src={<LiaReact className='mx-auto text-cmc text-[40px] font-bold' />}
                    text={`We’re unbiased`}
                    prh={`Our online tools help you decide what product is best for you. We’re here to insurance plan you choose.`} />
                <BenefitsCard src={<LiaReact className='mx-auto text-cmc text-[40px] font-bold' />}
                    text={`We’re unbiased`}
                    prh={`Our online tools help you decide what product is best for you. We’re here to insurance plan you choose.`} />
                <BenefitsCard src={<LiaReact className='mx-auto text-cmc text-[40px] font-bold' />}
                    text={`We’re unbiased`}
                    prh={`Our online tools help you decide what product is best for you. We’re here to insurance plan you choose.`} />
                <BenefitsCard src={<LiaReact className='mx-auto text-cmc text-[40px] font-bold' />}
                    text={`We’re unbiased`}
                    prh={`Our online tools help you decide what product is best for you. We’re here to insurance plan you choose.`} />
                <BenefitsCard src={<LiaReact className='mx-auto text-cmc text-[40px] font-bold' />}
                    text={`We’re unbiased`}
                    prh={`Our online tools help you decide what product is best for you. We’re here to insurance plan you choose.`} />
            </div>
        </div>
    )
}

export default Benefits
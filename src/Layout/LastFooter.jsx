import React from 'react'
import Container from '../Component/Container'
import logo from '../assets/logo.png'
import { FaGoogle, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import List from '../Component/List';

const LastFooter = () => {
    return (
        <section className='mt-[150px] sm:mt-[80px] mb-[120px] sm:mb-[30px]'>
            <Container>
                <div className='flex flex-col lg:flex-row lg:gap-10  xl:justify-between w-full'>

                    <div className="xl:w-[22%] sm:w-[50%] lg:w-[30%] flex flex-col">
                        <div className="">
                            <img src={logo} className='top-0' />
                        </div>

                        <div className='flex mt-[35px] gap-x-2'>
                            <button type='#' className="border p-2 rounded-full bg-gray-400">
                                <FaGoogle className='text-[20px] sm:text-[16px] text-paraColor' />
                            </button>
                            <button type='#' className="border p-2 rounded-full bg-gray-400">
                                <FaTwitter className='text-[20px] sm:text-[16px] text-paraColor' />
                            </button>
                            <button type='#' className="border p-2 rounded-full bg-gray-400">
                                <FaInstagram className='text-[20px] sm:text-[16px] text-paraColor' />
                            </button>
                            <button type='#' className="border p-2 rounded-full bg-gray-400">
                                <FaLinkedin className='text-[20px] sm:text-[16px] text-paraColor' />
                            </button>

                        </div>
                    </div>

                    <div className="flex xl:flex-row flex-col sm:flex-row max-sm:mt-[10vw] lg:mt-0 sm:mt-[8vw] w-full justify-between lg:justify-between">
                        <ul>
                            <li className="pb-2 font-bold text-left text-[18px] sm:text-[20px] md:text-[2vw] xl:text-[22px]">
                                Products
                            </li>

                            {
                                ["Landingpage", "Features", "Documentation", "Referral Program", "Pricing"].map((el, idx) => (
                                    <li key={idx} className="text-[14px] sm:text-[15px] pb-3 font-semibold xl:text-[14px] max-sm:text-gray-500 sm:text-gray-500 md:text-gray-500 md:text-[2vw] xl:text-cmgc font-sans hover:text-primary duration-300 cursor-pointer">{el}</li>
                                ))
                            }
                        </ul>
                        <ul>
                            <li className="pb-2 font-bold text-left text-[18px] sm:text-[20px] md:text-[2vw] xl:text-[22px]">
                                Services
                            </li>

                            {
                                ["Documantation", "Design", "Themes", "Illustrations", "UI Kit"].map((el, idx) => (
                                    <li key={idx} className="text-[14px] sm:text-[15px] pb-3 font-semibold xl:text-[14px] max-sm:text-gray-500 sm:text-gray-500 md:text-gray-500 md:text-[2vw] xl:text-cmgc font-sans hover:text-primary duration-300 cursor-pointer">{el}</li>
                                ))
                            }
                        </ul>
                        <ul>
                            <li className="pb-2 font-bold text-left text-[18px] sm:text-[20px] md:text-[2vw] xl:text-[22px]">
                                Company
                            </li>

                            {
                                ["About", "Terms", "Privacy Policy", "Careers",].map((el, idx) => (
                                    <li key={idx} className="text-[14px] sm:text-[15px] pb-3 font-semibold xl:text-[14px] max-sm:text-gray-500 sm:text-gray-500 md:text-gray-500 md:text-[2vw] xl:text-cmgc font-sans hover:text-primary duration-300 cursor-pointer">{el}</li>
                                ))
                            }
                        </ul>
                        <ul>
                            <li className="pb-2 font-bold text-left text-[18px] sm:text-[20px] md:text-[2vw] xl:text-[22px]">
                                More
                            </li>

                            {
                                ["Documantation", "License", "Changelog",].map((el, idx) => (
                                    <li key={idx} className="text-[14px] sm:text-[15px] pb-3 font-semibold xl:text-[14px] max-sm:text-gray-500 sm:text-gray-500 md:text-gray-500 md:text-[2vw] xl:text-cmgc font-sans hover:text-primary duration-300 cursor-pointer">{el}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default LastFooter
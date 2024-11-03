import React from 'react'
import Container from '../Component/Container'
import logo from '../assets/logo.png'
import { FaGoogle, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import List from '../Component/List';

const LastFooter = () => {
    return (
        <section className='mt-[150px] mb-[120px]'>
            <Container>
                <div className='flex justify-between w-full'>

                    <div className="w-[22%] flex flex-col">
                        <div className="">
                            <img src={logo} className='top-0' />
                        </div>

                        <div className='flex mt-[35px] gap-x-2'>
                            <button type='#' className="border p-2 rounded-full bg-gray-400">
                                <FaGoogle className='text-[20px] text-paraColor' />
                            </button>
                            <button type='#' className="border p-2 rounded-full bg-gray-400">
                                <FaTwitter className='text-[20px] text-paraColor' />
                            </button>
                            <button type='#' className="border p-2 rounded-full bg-gray-400">
                                <FaInstagram className='text-[20px] text-paraColor' />
                            </button>
                            <button type='#' className="border p-2 rounded-full bg-gray-400">
                                <FaLinkedin className='text-[20px] text-paraColor' />
                            </button>

                        </div>
                    </div>

                    {/* <div className=""> */}
                    <table className='w-[70%] bg-white border-none' >
                        <thead className="!w-[500px]">
                            <tr>
                                <th className="py-2 font-bold text-left text-[18px]">
                                    Products
                                </th>
                                <th className="py-2 font-bold text-left text-[18px]">
                                    Services
                                </th>
                                <th className="py-2 font-bold text-left text-[18px]">
                                    Company
                                </th>
                                <th className="py-2 font-bold text-left text-[18px]">
                                    More
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>

                                <th className="py-2 font-bold text-left text-[18px]">
                                    <ul>
                                        <List href='#' text='Landingpage' className='pb-5' />
                                        <List href='#' text='Features' className='pb-5' />
                                        <List href='#' text='Documentation' className='pb-5' />
                                        <List href='#' text='Referral Program' className='pb-5  text-[16px]' />
                                        <List href='#' text='Pricing' className='' />
                                    </ul>
                                </th>

                                <th className="py-2 font-bold text-left text-[18px]">
                                    <ul>
                                        <List href='#' text='Documantation' className='pb-5' />
                                        <List href='#' text='Design' className='pb-5' />
                                        <List href='#' text='Themes' className='pb-5' />
                                        <List href='#' text='Illustrations' className='pb-5' />
                                        <List href='#' text='UI Kit' className='pb-5' />
                                    </ul>
                                </th>

                                <th className="py-2 font-bold text-left text-[18px]">
                                    <ul>
                                        <List href='#' text='About' className='pb-5' />
                                        <List href='#' text='Terms' className='pb-5' />
                                        <List href='#' text='Privacy Policy' className='pb-5' />
                                        <List href='#' text='Careers' className='pb-5' />
                                        <List href='#' text='.' className='pb-5 text-transparent' />
                                    </ul>
                                </th>

                                <th className="py-2 font-bold text-left text-[18px]">
                                    <ul>
                                        <List href='#' text='Documantation' className='pb-5' />
                                        <List href='#' text='License' className='pb-5' />
                                        <List href='#' text='Changelog' className='pb-5' />
                                        <List href='#' text='.' className='pb-5 text-transparent' />
                                        <List href='#' text='.' className='pb-5 text-transparent' />
                                    </ul>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                    {/* </div> */}
                </div>
            </Container>
        </section>
    )
}

export default LastFooter
import React from 'react'
import logo from '../assets/logo.png'
import List from '../Component/List'
import Cmbutton from '../Component/Cmbutton'
import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { useState } from 'react'


const Navber = ({ className }) => {
    const navLi = ["Home", "Page", "Service", "Portfolio", "Blog", "Contact"]

    const [open, setopen] = useState(false)

    return (
        <div className={`flex justify-between items-center xl:items-center py-[25px] h-[10vh] gap-4 xl:gap-0 ${className}`}>

            <img src={logo} alt="" className='w-[170px] md:w-[180px] xl:w-[150px]' />

            <div className={`flex max-sm:flex-col sm:flex-col xl:justify-between xl:items-center max-sm:w-[60%] sm:w-[60%] md:w-[60%] lg:w-[70%] max-sm:h-screen sm:h-screen md:h-screen max-sm:z-[999] sm:z-[999] md:z-[999] max-sm:fixed sm:fixed md:fixed max-sm:top-0 sm:top-0 md:top-0 ${open ? "max-sm:right-0 sm:right-0" : "max-sm:-right-[100%] sm:-right-[100%]"} lg:left-0 lg:h-[10vh] lg:relative duration-300`}>

                <div className="flex max-sm:flex-col sm:flex-col lg:flex-row lg:items-center justify-center lg:justify-between  xl:gap-10 max-sm:gap-5 sm:gap-5 items-center max-sm:bg-gray-900 sm:bg-gray-900 max-sm:h-full lg:bg-transparent sm:h-full max-sm:w-full sm:w-full">
                    <ul className={`flex max-sm:flex-col sm:flex-col lg:flex-row text-center max-sm:pt-[8vw]  max-sm:gap-5 sm:gap-5 xl:w-[536px] xl:justify-between `}>
                        {
                            navLi.map((el, idx) => {
                                return (
                                    <List key={idx} text={el} className={"lg:text-cmgc"} />
                                )
                            })
                        }

                        <IoMdClose onClick={() => setopen(!open)} className={`text-[8vw] sm:text-[6vw] text-white  absolute top-5 left-5 ${open ? "block" : "hidden"}`} />
                    </ul>
                    <Cmbutton text={`Call Now`} className={`max-sm:w-[120px] sm:w-[120px] md:w-[18vw] lg:w-[12vw] lg:!text-[1.7vw]`} />
                </div>

            </div >

            <button onClick={() => setopen(!open)} className='xl:hidden lg:hidden text-[5vw]'>
                <HiMenuAlt3 />
            </button>
        </div >
    )
}

export default Navber
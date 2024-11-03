import React from 'react'
import logo from '../assets/logo.png'
import List from '../Component/List'
import Cmbutton from '../Component/Cmbutton'

const Navber = () => {
    const navLi = ["Home", "Page", "Service", "Portfolio", "Blog", "Contact"]
    return (
        <div className='flex flex-col md:flex-row justify-between items-center py-[25px] gap-4 md:gap-0'>
            <img src={logo} alt="" className='w-[150px] md:w-auto' />
            <ul className='flex flex-wrap justify-center md:w-[536px] gap-4 md:gap-0 md:justify-between'>
                {
                    navLi.map((el, idx) => {
                        return (
                            <List key={idx} text={el} />
                        )
                    })
                }
            </ul>
            <Cmbutton text={`Call Now`} />
        </div>
    )
}

export default Navber
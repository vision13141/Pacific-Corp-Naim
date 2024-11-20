import React from 'react'

const List = ({ text, className }) => {
    return (
        <li className={`${className} text-[20px] font-semibold xl:text-[14px] max-sm:text-white sm:text-white max-sm:hover:text-gray-500 sm:hover:text-gray-500 xl:text-cmgc font-sans hover:text-primary duration-300 cursor-pointer`}>{text}</li>
    )
}

export default List
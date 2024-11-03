import React from 'react'

const List = ({ text, className }) => {
    return (
        <li className={`${className} text-[14px] md:text-[16px] text-cmgc font-sans font-normal`}>{text}</li>
    )
}

export default List
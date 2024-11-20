import React from 'react'

const Title = ({ text, className }) => {
    return (
        <h1 className={`${className} max-sm:text-[18px] sm:text-[24px] xl:text-[40px] md:text-[4vw] max-sm:leading-6`}>{text}</h1>
    )
}

export default Title
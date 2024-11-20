import React from 'react'

const Paragraph = ({ text, className }) => {
    return (
        <p className={`${className} max-sm:w-[320px] sm:w-[520px] md:w-[55vw] `}>
            {text}
        </p>
    )
}

export default Paragraph
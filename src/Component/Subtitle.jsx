import React from 'react'

const Subtitle = ({ text, className }) => {
    return (
        <div className=' mx-auto w-[260px]'>
            <h3 className={`${className} border-b-[2px] text-cmc border-cmgc border-dashed text-center pb-[15px] font-bold text-[18px] uppercase tracking-[0.15vh]`}>{text}</h3>
        </div>
    )
}

export default Subtitle
import React from 'react'

const Subtitle = ({ text, className }) => {
    return (
        <div className='mx-auto xl:w-[260px] w-[150px] sm:w-[180px] md:w-[20vw]'>
            <h3 className={`${className} border-b-[2px] text-cmc border-cmgc border-dashed text-center xl:pb-[15px] pb-[10px] font-bold xl:text-[18px] text-[14px] sm:text-[15px] md:text-[2vw] uppercase tracking-[0.15vh]`}>
                {text}
            </h3>
        </div>
    )
}

export default Subtitle
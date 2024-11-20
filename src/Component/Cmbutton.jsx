import React from 'react'

const Cmbutton = ({ text, className }) => {
  return (
    <div className={`${className} bg-cmc py-[5px] md:py-[1vh] md:!text-[2.7vw] rounded-[5px] text-white font-sans font-bold text-[16px] xl:py-[10px] xl:px-[15px] xl:rounded-[10px] xl:!text-[22px] text-center`}>
      {text}
    </div>
  )
}

export default Cmbutton
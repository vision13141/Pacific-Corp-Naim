import React from 'react'

const Cmbutton = ({ text, className }) => {
  return (
    <div className={`${className} bg-cmc py-[15px] px-[28px] rounded-[10px] text-white font-sans font-bold text-[20px]`}>
      {text}
    </div>
  )
}

export default Cmbutton
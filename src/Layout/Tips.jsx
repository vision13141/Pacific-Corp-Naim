import React from 'react'
import Title from '../Component/Title'
import Subtitle from '../Component/Subtitle'
import Paragraph from '../Component/Paragraph'
import tipsImg from '../assets/tipsImg.jpg'
import tipsImg2 from '../assets/tipsImg2.jpg'
import tipsImg3 from '../assets/tipsImg3.jpg'

const Tips = () => {
    return (
        <div className='h-screen w-full pt-[100px]'>
            <Subtitle text={`our tips for you`} />
            <Title className={`my-[15px]`} text={`Reinventing Your Protection`} />
            <Paragraph className={`mx-auto`}
                text={`We share common trends, strategies ideas, opinion, short & log stories from the team behind company`} />

            <div className="flex justify-between mt-[60px]">
                <img src={tipsImg} alt="" />
                <div className="w-[330px] h-[460px]">
                    <img src={tipsImg2} alt="" />
                    <h2 className='text-center text-[25px] font-semibold leading-[40px] my-[10px]'>
                        How to prevent and protect yo  ur family from Carbon monoxide
                    </h2>
                    <Paragraph text={`We share common trends, strategies ideas, opinion, short & log
stories from the team behind company.`} className={`w-full text-center`} />
                </div>
                <img src={tipsImg3} alt="" />
            </div>

        </div>
    )
}

export default Tips
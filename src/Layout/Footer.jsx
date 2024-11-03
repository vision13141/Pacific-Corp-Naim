import React from 'react'
import Title from '../Component/Title'
import Container from '../Component/Container'
import Paragraph from '../Component/Paragraph'

const Footer = () => {
    return (
        <div className='w-full h-[540px] py-[130px] bg-title'>
            <Container>
                <Title className={`text-white text-center w-[890px] mx-auto leading-[60px]`}
                    text={`Ready To Get Insured? Submit Your Request  And Hear Back As Soon As Tomorroe.`} />

                <form>
                    <div className='w-[495px] flex justify-between mx-auto py-[20px]'>
                        <input placeholder='Your Email' name='email' type="email" className='w-[320px] py-[16px] px-4 rounded-xl outline-none' />
                        <button type='submit' className='w-[156px] bg-[#89D32A] py-[16px] px-4 rounded-xl outline-none'>
                            Get started
                        </button>
                    </div>
                </form>
                <Paragraph className={`mx-auto w-[555px]`} text={`Get a response tomorrow if you submit by 9pm today. If we received after 9pm will get a reponse the following day.`} />
            </Container>
        </div>
    )
}

export default Footer
import React from 'react'
import Title from '../Component/Title'
import Container from '../Component/Container'
import Paragraph from '../Component/Paragraph'

const Footer = () => {
    return (
        <div className='w-full xl:h-[540px] md:mt-[3vw] max-sm:py-[20vw] sm:py-[10vw] mt-[10vw] xl:py-[130px] max-sm:flex max-sm:items-center max-sm:justify-center bg-title'>
            <Container>
                <Title className={`text-white text-center xl:w-[890px] max-sm:!text-[20px] md:!text-[4vw] max-sm:!leading-[30px] sm:!leading-[40px] md:!leading-[5vw] xl:!text-[40px] xl:!leading-[50px] mx-auto`}
                    text={`Ready To Get Insured? Submit Your Request  And Hear Back As Soon As Tomorroe.`} />

                <form>
                    <div className='xl:w-[495px] md:w-[60vw] flex justify-between sm:justify-center sm:gap-4 md:gap-2 mx-auto py-[20px]'>
                        <input placeholder='Your Email' name='email' type="email" className='xl:w-[320px] xl:py-[16px] py-[8px] md:py-[1.7vw] px-4 sm:px-5 md:w-[40vw] rounded-xl outline-none' />
                        <button type='submit' className='xl:w-[156px] bg-[#89D32A] xl:py-[16px] md:w-[15vw] text-center py-[8px] px-4 sm:px-5 md:px-0 rounded-xl outline-none'>
                            Get started
                        </button>
                    </div>
                </form>
                <Paragraph className={`mx-auto w-[555px] sm:!text-[16px] sm:!font-semibold`} text={`Get a response tomorrow if you submit by 9pm today. If we received after 9pm will get a reponse the following day.`} />
            </Container>
        </div>
    )
}

export default Footer
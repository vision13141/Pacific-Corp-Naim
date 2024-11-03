import React from 'react'
import Subtitle from '../Component/Subtitle'
import Title from '../Component/Title'
import Paragraph from '../Component/Paragraph'
import TestimonialCard from '../Component/TestimonialCard'

const Testimonial = () => {
    return (
        <div className='w-full h-[90vh] pt-[100px]'>
            <Subtitle text={`testimonial`} />
            <Title className={`my-[15px]`} text={`What Our Customer Have To Says`} />
            <Paragraph text={`We share common trends, strategies ideas, Opinion, short & log stories from the team behind company`}
                className={`mx-auto`} />

            <div className="flex justify-between mt-[50px]">
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
            </div>
        </div>
    )
}

export default Testimonial
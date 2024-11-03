import React from 'react'

const Container = ({ children, className }) => {
    return (
        <div className={`${className} max-w-[1180px] w-[95%] mx-auto`}>
            {children}
        </div>
    )
}

export default Container
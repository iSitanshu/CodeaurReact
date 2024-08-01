import React from 'react'

const Button = ({
    className = '',
    text
}) => {
    return (
        <>
            <div className={`${className}`}>Button 2</div>
            <h1 className={`${className}`}>{text}</h1>
        </>
    )
}

export default Button;
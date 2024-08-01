import React from 'react'

const Button = ({
    className = '',
    text
}) => {
    return (
        <>
            <div className={`${className}`}><Button>Button 2</Button></div>
            <h1 className={`${className}`}>{text}</h1>
        </>
    )
}

export default Button;
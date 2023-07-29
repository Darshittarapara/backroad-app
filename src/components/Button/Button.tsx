import React from 'react'
import "./Button.scss";
import { ButtonProps } from 'Modal/Modal';
const Button: React.FC<ButtonProps> = ({
    className = "button",
    type,
    onClick,
    buttonText
}) => {
    return (
        <>
            <button className={className} type={type} onClick={() => onClick()}>{buttonText}</button>
        </>
    )
}

export default Button
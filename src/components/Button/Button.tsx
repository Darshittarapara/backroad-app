import React from 'react'
import "./Button.scss";
import { ButtonProps } from 'Modal/Modal';
const Button: React.FC<ButtonProps> = ({
    className = "button",
    type,
    onClick,
    buttonText,
    hasShowAll
}) => {
    const handlerClick = () => {
        onClick(hasShowAll)
    }
    return (
        <>
            <button className={className} type={type} onClick={handlerClick}>{buttonText}</button>
        </>
    )
}

export default Button
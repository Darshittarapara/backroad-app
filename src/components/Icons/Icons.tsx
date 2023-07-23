import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProps } from 'Modal/Modal'
import React from 'react'

const Icons: React.FC<IconProps> = ({
    icon,
    onClick,
    reDirectLink,
    ...props
}) => {
    const className = props.className || '';
    const handlerIconClick = () => {
        if (reDirectLink) {
            onClick(reDirectLink);
            return
        }
        onClick()
    }
    return (
        <>
            <FontAwesomeIcon onClick={handlerIconClick} icon={icon} className={className} />
        </>
    )
}

export default Icons
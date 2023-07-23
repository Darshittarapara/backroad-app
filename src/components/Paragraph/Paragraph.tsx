import { ParagraphProps } from 'Modal/Modal'
import React from 'react'

const Paragraph: React.FC<ParagraphProps> = ({
    text,
    className
}) => {
    return (
        <>
            <p className={className} >{text}</p>
        </>
    )
}

export default Paragraph
import { ParagraphProps } from 'Modal/Modal'
import React from 'react'

const Paragraph: React.FC<ParagraphProps> = ({
    texts,
    className
}) => {
    return (
        <>
            {texts.map((text, index) => {
                return <p className={className} key={`${index}`}>{text}</p>
            })}
        </>
    )
}

export default Paragraph
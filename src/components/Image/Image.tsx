import { ImageProps } from 'Modal/Modal'
import React from 'react'

const Image: React.FC<ImageProps> = (props) => {
    const width = props.width;
    const height = props.height;
    const className = props.className ? props.className : "";
    const src = props.src
    const alt = props.alt
    return (
        <>
            <img src={src} width={width} height={height} className={className} alt={alt} />
        </>
    )
}

export default Image
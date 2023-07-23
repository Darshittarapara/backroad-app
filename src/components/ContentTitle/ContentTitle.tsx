import { ContentTitleProps } from 'Modal/Modal'
import { constant } from 'config/constant/constant'
import React from 'react'

const ContentTitle: React.FC<ContentTitleProps> = ({
    className,
    title,
    headingNeed
}) => {
    const {
        hOne,
        hTwo,
        hThree,
        hFour,
        hFive,
        hSix
    } = constant.headings
    const getContentTitle = () => {
        switch (headingNeed) {
            case hOne:
                return <h1 className={className || ""}>{title}</h1>

            case hTwo:
                return <h2 className={className || ""}>{title}</h2>

            case hThree:
                return <h3 className={className || ""}>{title}</h3>

            case hFour:
                return <h4 className={className || ""}>{title}</h4>

            case hFive:
                return <h5 className={className || ""}>{title}</h5>
            default:
                return <h6 className={className || ""}>{title}</h6>
        }
    }
    return (
        <>
            {getContentTitle()}
        </>
    )
}

export default ContentTitle
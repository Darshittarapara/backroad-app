import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ServiceDetailsProps } from 'Modal/Modal'
import ContentTitle from 'components/ContentTitle/ContentTitle'
import Paragraph from 'components/Paragraph/Paragraph'
import { constant } from 'config/constant/constant'
import React from 'react'
import './Details.scss';
const Details: React.FC<ServiceDetailsProps> = ({
    icon,
    title,
    texts
}) => {
    return (
        <div className='details-block'>
            <div className='icon-container'>
                <FontAwesomeIcon icon={icon} />
            </div>
            <div className="details_description">
                <ContentTitle title={title} headingNeed={constant.headings.hFour} />
                <Paragraph texts={texts} />
            </div>
        </div>
    )
}

export default Details
import Button from 'components/Button/Button'
import ContentTitle from 'components/ContentTitle/ContentTitle'
import Image from 'components/Image/Image'
import Paragraph from 'components/Paragraph/Paragraph'
import { Strings } from 'config/Strings/Strings'
import { constant } from 'config/constant/constant'
import React, { useState } from 'react'

import "./Service.scss"
import { faWallet } from '@fortawesome/free-solid-svg-icons'
import { faSquarePinterest } from '@fortawesome/free-brands-svg-icons'
import { faNoteSticky } from '@fortawesome/free-regular-svg-icons'
import Details from './components/Details'
const Service = () => {

    const details = [
        {
            title: Strings.savingMoney,
            icon: faWallet,
            text: ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia."]
        },
        {
            title: Strings.endlessHiking,
            icon: faSquarePinterest,
            text: ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia."]
        },
        {
            title: Strings.savingMoney,
            icon: faNoteSticky,
            text: ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia."]
        }
    ]

    return (
        <div className='service-container'>
            <section className='service-section'>
                <ContentTitle title={Strings.Our} headingNeed={constant.headings.hOne} />
                <ContentTitle className='us-name-title' title={Strings.services} headingNeed={constant.headings.hOne} />
            </section>
            <div className='service-details-container'>
                {details.map((item, index) => {
                    return <Details title={item.title} icon={item.icon} texts={item.text} />
                })}
            </div>
        </div>
    )
}

export default Service
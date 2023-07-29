import Button from 'components/Button/Button'
import ContentTitle from 'components/ContentTitle/ContentTitle'
import Image from 'components/Image/Image'
import Paragraph from 'components/Paragraph/Paragraph'
import { Strings } from 'config/Strings/Strings'
import { constant } from 'config/constant/constant'
import React, { useState } from 'react'
import about from "assets/images/about.jpeg"
import "./About.scss"
import { aboutExploreTour } from 'assets/data/Tour'
const About = () => {
    const [maxTextLength, setMaxTextLength] = useState(constant.maxTextLength)

    const readMoreHandler = (hasShowAll: boolean) => {
        console.log(hasShowAll);
        setMaxTextLength(() => {
            return hasShowAll ? aboutExploreTour.length : constant.maxTextLength
        })
    }
    return (
        <div className='about-container'>
            <section className='about-section'>
                <ContentTitle title={Strings.about} headingNeed={constant.headings.hOne} />
                <ContentTitle className='us-name-title' title={Strings.us} headingNeed={constant.headings.hOne} />
            </section>
            <div className='about-details-container'>
                <div className='about-image'>
                    <div className='image'>
                        <Image src={about} alt={Strings.about} width={constant.about.image.width} height={constant.about.image.height} />
                    </div>

                </div>
                <div className='explore-details'>
                    <ContentTitle title={Strings.exploreTheDifference} headingNeed={constant.headings.hFour} />
                    <Paragraph texts={aboutExploreTour.filter((item, index) => index < maxTextLength)} />
                    {maxTextLength === constant.maxTextLength ? (
                        <Button hasShowAll={true} buttonText={Strings.readMore} onClick={readMoreHandler} type={'button'} />
                    ) : <Button hasShowAll={false} buttonText={Strings.hideInfo} onClick={readMoreHandler} type={'button'} />}

                </div>
            </div>
        </div>
    )
}

export default About
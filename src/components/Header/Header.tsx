import React from 'react'
import Navbar from './Navbar/Navbar'
import './Header.scss'
import ContentTitle from 'components/ContentTitle/ContentTitle'
import { Strings } from 'config/Strings/Strings'
import { constant } from 'config/constant/constant'
import Paragraph from 'components/Paragraph/Paragraph'
import Button from 'components/Button/Button'
const Header = () => {
    const headingText = [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae explicabo debitis est autem dicta."
    ]
    const RedirectToExploreTour = () => {
        console.log(process.env.REACT_APP_EXPLORE_TOURS)
        if (process.env.REACT_APP_EXPLORE_TOURS) {
            window.location.href = process.env.REACT_APP_EXPLORE_TOURS
        }
    }
    return (
        <div className='header'>
            <Navbar />
            <div className='header-section'>
                <ContentTitle className='heading-title' headingNeed={constant.headings.hOne} title={Strings.continueExploring} />
                <Paragraph className='header-description' texts={headingText} />
                <Button className='explore-button' onClick={() => RedirectToExploreTour()} buttonText={Strings.exploreTours} type='button' />
            </div>
        </div>
    )
}

export default Header
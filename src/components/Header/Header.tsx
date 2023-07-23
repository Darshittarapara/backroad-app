import React from 'react'
import Navbar from './Navbar/Navbar'
import './Header.scss'
import ContentTitle from 'components/ContentTitle/ContentTitle'
import { Strings } from 'config/Strings/Strings'
const Header = () => {
    return (
        <div className='header'>
            <Navbar />
            <div className='header-section'>
                      
            </div>
        </div>
    )
}

export default Header
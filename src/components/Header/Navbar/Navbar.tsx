import { Strings } from 'config/Strings/Strings'
import { constant } from 'config/constant/constant'
import React from 'react'
import './Navbar.scss';
import Logo from 'assets/images/logo.svg'
import Image from 'components/Image/Image'
import Links from 'components/Links/Links'
import { PATHS } from 'config/paths/paths'
import { faGithub, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Icons from 'components/Icons/Icons'
const Navbar = () => {

    const redirectToSocialPage = (link: string) => {
        window.location.href = link
    }
    const navLinks = [
        {
            title: Strings.home,
            path: PATHS.home
        },
        {
            title: Strings.about,
            path: PATHS.about
        },
        {
            title: Strings.service,
            path: PATHS.service
        },
        {
            title: Strings.tours,
            path: PATHS.tours
        }
    ]

    const icons = [
        {
            className: "social-icon",
            icon: faGithub,
            onClick: redirectToSocialPage,
            link: process.env.REACT_APP_GITHUB_URL
        },
        {
            className: "social-icon",
            icon: faFacebook,
            onClick: redirectToSocialPage
        },
        {
            className: "social-icon",
            icon: faInstagram,
            onClick: redirectToSocialPage
        }
    ]
    return (
        <div className="header-link-container">
            <div className="logo">
                <Image src={Logo} alt={Strings.backRoads} height={constant.header.navbar.logo.height} width={constant.header.navbar.logo.width} />
            </div>
            <div className='navbar'>
                <ul className='nav-item'>
                    {navLinks?.map(({ title, path }, index) => {
                        return (
                            <li key={`${index}`}>
                                <Links title={title} url={path} className='nav-links' activeClassName='active-nav-links' />
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className='social-icon-container'>
                {icons.map((item) => {
                    return (
                        <Icons icon={item.icon} reDirectLink={item?.link} onClick={item.onClick} className={item.className} />
                    )
                })}
            </div>
        </div>
    )
}

export default Navbar
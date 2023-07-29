import { NavLinksProps } from 'Modal/Modal'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Links: React.FC<NavLinksProps> = ({
    className,
    activeClassName,
    title,
    url
}) => {
    return (
        <>
            <NavLink to={url} className={({ isActive }) => (isActive ? activeClassName : className)}>{title}</NavLink>
        </>
    )
}

export default Links
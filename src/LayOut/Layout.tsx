import Header from 'components/Header/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'
import './Layout.scss';
const Layout = () => {
    return (
        <div className='container'>
            <Header />
            <div className="main">
                <Outlet />
            </div>
        </div>

    )
}

export default Layout
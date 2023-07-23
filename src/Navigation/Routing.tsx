import Layout from 'LayOut/Layout'
import { PATHS } from 'config/paths/paths'
import Home from 'pages/Home/Home'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

const Routing = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path={PATHS.home} element={<Home />} />
            </Route>
        </Routes>
    )
}

export default Routing
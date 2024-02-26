import React from 'react'

import Header from './component/Header/Header'
import { Outlet } from 'react-router-dom'

import Footer from './component/Footer/footer'


export function Layout() {
    

    return (
        <>
         <Header/>
         <Outlet/>
         <Footer/> 
        </>
    )
}

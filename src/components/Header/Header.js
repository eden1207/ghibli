import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Header.css'
import logo_ghibli from '../../assets/logo_ghibli.png'

export default function Header() {
    return(
        <div className='Header'>
            <img src={logo_ghibli} className='logo-ghibli' alt='ghibli' />
            <nav className='navigation navigation_dimensions' aria-label="main" role="navigation">
                <Link className='menu-link' to="/">
                    Home
                </Link>
                <Link className='menu-link' to="/about">
                    About
                </Link>
                <Link className='menu-link' to="/favorite">
                    Favorite
                </Link>
            </nav>
        </div>
    )
}
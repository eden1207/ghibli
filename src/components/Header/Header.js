import React, { useState } from 'react'
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import './styles/Header.css'
import logo_ghibli from '../../assets/logo_ghibli.png'

/** 
 * Component to display the header 
 * There is a state to count the number of movies the user likes
 */
export default function Header() {
    const likedMoviesCount = useSelector((state) => state.likedMoviesCount);
    const [isSmallHeader, setIsSmallHeader] = useState(false);
    /** Control of the height of the header during scroll */
    window.addEventListener('scroll', () => {
        const { scrollTop } = document.documentElement;
        if(scrollTop > 10) {
            setIsSmallHeader(true);
        }
        if(scrollTop < 10) {
            setIsSmallHeader(false);
        }
    });
    return(
        <header 
            data-testid="header-component"
            className={`Header ${isSmallHeader ? 'small-header' : 'high-header'}`}
        >
            <img 
                src={logo_ghibli} 
                className={`logo-ghibli ${isSmallHeader ? 'small-logo' : 'high-logo'}`} 
                alt='ghibli' 
            />
            <nav className='navigation navigation_dimensions' aria-label="main" role="navigation">
                <Link className='menu-link' to="/">
                    Home
                </Link>
                <Link className='menu-link' to="/about">
                    About
                </Link>
                <Link className='menu-link' to="/favorite">
                    {
                        likedMoviesCount > 0 ? `Favorite (${likedMoviesCount})` : 'Favorite'
                    }
                </Link>
            </nav>
        </header>
    )
}
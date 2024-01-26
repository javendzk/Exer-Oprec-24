import javn from '../assets/logo_javen.png'
import NavItem from './NavItem.jsx'
import React, { useState, useEffect } from 'react'


export default function NavBar({ onScroll }) {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const isScrolled = window.scrollY > 0;
        setScrolled(isScrolled);
    };
  
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [onScroll]);

    return (  
        <header className={`flex justify-left items-center px-32 fixed top-0 w-full z-50 ${scrolled ? 'transition_navbar_default h-20 bg_components border-b border-blue-900 shadow-md' : 'transition_navbar_default h-24 bg-transparent border-none shadow-none'}`}>
            <img src={javn} className="mb-3 float-left mt-2.5 ml-2.5 mr-24 h-8"></img>
            <nav>
                <ul>
                    <NavItem title="Home" target="/home" />
                    <NavItem title="Currency" target="/currency" />
                    <NavItem title="Temperature" target="/temperature" />
                </ul>
            </nav>
        </header>
    )
}
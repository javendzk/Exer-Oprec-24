// Navbar casual -> ukuran logo besar kalo scrollY == 0, kalo ga kecil
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
            <img src={javn} className={`mb-3 h-12 float-left mt-2.5 ml-2.5 mr-24 transition-all duration-300 ease-in-out ${scrolled ? "h-8": "h-12"}`}></img>
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
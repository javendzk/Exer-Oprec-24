import NavBar from '../components/NavbarScroll.jsx'
import MenuPicker from '../components/MenuPicker.jsx'
import LandingContent from '../components/LandingContents.jsx'
import Footer from '../components/Footer.jsx'
import BgFull from '../assets/bg_full.png'
import { useState } from 'react'
import { motion } from 'framer-motion'

const fadeInAnimation = {
    before: {
        opacity: 0,
    },
    afterA: {
        opacity: 1,
        transition: {
            delay: 0.1,
            duration: 0.5,
        },
    },
    afterB: {
        opacity: 1,
        transition: {
            delay: 0.2,
            duration: 0.5,
        },
    },
};

export default function LandingPage() {
    document.title = 'Home';
    window.scrollTo(0, 0);

    const [background, setBackground] = useState({
        backgroundColor: 'transparent',
        border: 'none',
        boxShadow: 'none',
    });

    const handleScroll = () => {
        const isScrolled = window.scrollY > 0;
          
            // jaga" kalo scroll ke atas lagi   
            if (window.scrollY === 0) {
                setBackground({
                    backgroundColor: 'transparent',
                    border: 'none',
                    boxShadow: 'none',
                });
              
            } 
            
            // style kirim ke navbar buat modify bg
            else {
                setBackground({
                    backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.8)' : 'transparent',
                    border: isScrolled ? '1px solid' : 'none',
                    boxShadow: isScrolled ? '0px 2px 4px rgba(0, 0, 0, 0.1)' : 'none',
                });
            }
        };

    return (
        <div>
            <div>
                <img src={BgFull} className="w-full h-full object-cover m-0 p-0 select-none" alt="Background" />
                <motion.div variants={fadeInAnimation}  initial="before" animate="afterA" viewport={{ once:true }}>
                    <NavBar onscroll={handleScroll}/>
                </motion.div>
                <motion.div variants={fadeInAnimation}  initial="before" animate="afterB" viewport={{ once:true }}>
                    <LandingContent />
                </motion.div>
            </div>
            <MenuPicker />
            <Footer />
        </div>
    )
}
import Navbar from '../components/NavbarServices.jsx'
import TempContents from '../components/TempContents.jsx'
import Footer from '../components/Footer.jsx'
import { useState } from 'react'
import { motion } from "framer-motion"

const fadeInAnimation = {
    before: {
        opacity: 0,
    },
    after: {
        opacity: 1,
        transition: {
            delay: 0.03,
        },
    },
};

const fadeUpAnimation = {
    before: {
        opacity: 0,
        y: 30,
    },
    after: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.1,
            ease: "easeOut",
        },
    },
}

export default function TemperaturePage() {
    document.title = 'Temperature Converter';
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
            <div className="bg_half_flexible">
                <motion.div variants={fadeInAnimation}  initial="before" animate="after" viewport={{ once:true }}>
                    <Navbar onscroll={handleScroll}/>
                </motion.div>
                <motion.div variants={fadeUpAnimation}  initial="before" animate="after" viewport={{ once:true }}>
                    <TempContents />
                </motion.div>
            </div>
            <div className='my-80 h-2'></div>
            <Footer />
        </div> 
    )
}
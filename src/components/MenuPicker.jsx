import BgConnect from '../assets/bg_transition.png'
import Panaz from '../assets/stock_temperature.jpg'
import Duid from '../assets/stock_currency.jpg'
import Menuliz from '../assets/stock_essay.jpeg'
import { motion } from "framer-motion"
import { NavLink } from "react-router-dom"

const fadeInAnimation = {
    before: {
        opacity: 0,
    },
  
    after: {
        opacity: 1,
        transition: {
            delay: 0.3,
        },
    },
};

const fadeUpAnimation = {
    before: {
        opacity: 0,
        y: 100,
    },
    after: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.1,
        },
    },

    //hover pake framer biar ga cekcok tailwind
    hover: {
        y: -20,
        transition: {
            delay: 0,
            ease: "easeOut",
        },
    },
};

export default function MenuPicker() {

    return (
        <div className='flex flex-col justify-center items-center'>
            <img src={BgConnect} className="w-full h-full object-cover m-0 p-0 select-none" alt="Background" />
            <div id="menupicker_scroll" className="w-full mt-4 h-10"></div>
            <motion.h1 variants={fadeInAnimation}  initial="before" whileInView="after" viewport={{ once:true }} className='mt-16 text-4xl text-black font-poppins'>Available Services</motion.h1>
            <div className='flex flex-col h-auto width_45 mt-12 mb-36 items-center'>
                <div className='flex flex-row justify-center items-center'>
                    <NavLink to="/currency">
                        <motion.div variants={fadeUpAnimation} whileHover="hover" initial="before" whileInView="after" style={{ width: '325px' }} className='h-86 mr-8 bg-gray-100 rounded-2xl border_1 border-gray-300 flex flex-col items-center hover:bg-gray-200 hover:border-gray-400 duration-300'>
                            <img src={Duid} className='rounded-2xl h-44 mt-4 border_1 border-gray-300'></img>
                            <h3 className='mt-6 font-open text-xl text-grey-800'>Currency Converter</h3>
                            <p className='mt-2 font-poppins text-sm text-justify mx-6 text-grey-600'>Convenient currency rate calculator for IDR, JPY, BTC, and USD. Equipped with the latest data to ensure the best accuracy</p>
                        </motion.div>
                    </NavLink>
                    <NavLink to="/temperature">
                        <motion.div  variants={fadeUpAnimation} whileHover="hover" initial="before" whileInView="after" style={{ width: '325px' }} className='h-86 ml-8 bg-gray-100 hover:bg-gray-200 hover:border-gray-400 rounded-2xl border_1 border-gray-300 flex flex-col items-center duration-300'>
                            <img src={Panaz} className='rounded-2xl h-44 mt-4 border_1 border-gray-300'></img>
                            <h3 className='mt-6 font-open text-xl text-grey-800'>Temperature Converter</h3>
                            <p className='mt-2 font-poppins text-sm text-justify mx-6 text-grey-600'>Calculator to convert temperature between known units. It also teaches you the way to do it step-by-step!</p>
                        </motion.div>
                    </NavLink>
                </div>
                <a target="_blank" href="https://drive.google.com/file/d/1R4mkFNmqSoZSgVMHw2qY3Q6nN-1dodie/view?usp=sharing">
                    <motion.div variants={fadeUpAnimation} whileHover="hover" initial="before" whileInView="after" style={{ width: '450px' }} className='mt-10 width_bottomcard bg-gray-100 hover:bg-gray-200 hover:border-gray-400 rounded-2xl border_1 border-gray-300 flex flex-row items-center duration-300 h-40'>
                        <img src={Menuliz} className="h-32 border_1 border-gray-300 rounded-2xl mx-4 my-4"></img>
                        <div className='flex flex-col mx-4 my-4'>
                            <h3 className='font-open text-xl text-grey-800'>Essay Answers</h3>
                            <p className='mt-2 font-poppins text-sm text-justify text-grey-600'>My answers for theoretical questions of the software division, Exercise Open Recruitment 2024</p>
                        </div>
                    </motion.div>
                </a>
            </div>
        </div>
    )
}
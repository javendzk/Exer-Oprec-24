import Linkedin from '../assets/icon_linkedin.svg'
import Twitter from '../assets/icon_twitter.svg'
import Github from '../assets/icon_github.svg'
import React from 'react'

export default function Footer() {

    return (    
        <footer className="flex justify-center items-center bottom-0 w-full relative bg_components h-10">
            <div className='w-48 flex *:justify-center items-start'>
                <h4 className="text-sm font-poppins text-white mr-4">© Javana Muhammad</h4>
                <h4 className="text-sm font-poppins text-white mr-4">|</h4>
            </div>
            <ul className="p-0 bg-inherit self-center">
                <li className='mr-6 inline-block'><a target="_blank" href="https://linkedin.com/in/javanadz/"><img style={{ width: '12px' }} src={Linkedin}></img></a></li>
                <li className='mr-6 inline-block'><a target="_blank" href="https://twitter.com/x"><img style={{ width: '12px' }} src={Twitter}></img></a></li>
                <li className='inline-block'><a target="_blank" href="https://github.com/javendzk"><img  style={{ width: '12px' }}src={Github}></img></a></li>            
            </ul>
        </footer>
    )
}
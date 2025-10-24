import React from 'react'
import TurnLogo from '../../../assets/images/turn-logo-transparent.png'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <section className='bg-[#ffffff]'>
            <div className="max-w-7xl mx-auto md:px-8 flex justify-between">
                <div className="w-20">
                    <img src={TurnLogo} alt="" className='w-20 ' />
                </div>
                <div className="gap-3 flex items-center justify-baseline">
                    <div className='bg-[#485d92] text-white flex items-center justify-center w-8 h-8 md:w-10 md:h-10  rounded-full shadow-md shadow-secondary-foreground hover:bg-[#485d92] text-lg md:text-2xl transition hover:text-white cursor-pointer hover:mb-0.5'>
                        <Link to='https://x.com/TURN_2025?t=IyoYO'>
                            <FaXTwitter />
                        </Link>
                    </div>
                    <div className='bg-[#485d92] text-white flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full shadow-md shadow-secondary-foreground hover:bg-[#485d92] text-lg md:text-2xl transition hover:text-white cursor-pointer hover:mb-0.5'>
                        <Link to='https://x.com'>
                            <FaFacebook />
                        </Link>
                    </div>
                    <div className='bg-[#485d92] text-white flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full shadow-md shadow-secondary-foreground hover:bg-[#485d92] text-lg md:text-2xl transition hover:text-white cursor-pointer hover:mb-0.5'>
                        <Link to='https://x.com'>
                            <FiLinkedin />
                        </Link>
                    </div>
                    <div className='bg-[#485d92] text-white flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full shadow-md shadow-secondary-foreground hover:bg-[#485d92] text-lg md:text-2xl transition hover:text-white cursor-pointer hover:mb-0.5'>
                        <Link to='https://x.com'>
                            <HiOutlineMail />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
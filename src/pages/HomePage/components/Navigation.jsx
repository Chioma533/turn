import React from 'react'
import Logo from '../../../assets/images/TurnveLogo2.svg'
import { Button } from '../../../components/ui/button'
import { useState } from 'react'
import { Link } from 'react-router-dom'
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
// import { Menu } from "lucide-react"

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '#about' },
        { name: 'Core Features', href: '#feature' },
        // { name: 'Contact', href: '/contact' },
    ]

    return (
        <nav className='fixed w-full top-0 z-50 bg-white/70 backdrop-blur-md shadow-sm'>
            <div className='max-w-7xl mx-auto md:px-8 px-4 py-4 flex justify-between items-center'>
                {/* Turn Logo */}
                <div className='shrink-0'>
                    <img src={Logo} className='w-20' />
                </div>

                {/* Destop Navigation */}
                <div className='flex gap-2 '>
                    <div className='hidden md:block'>
                        <ul className='flex items-baseline space-x-4'>
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        className='text-[16px] font-medium text-primary hover:text-[#003399] px-3 py-2 rounded-md'
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                            <Link to='/join'>
                            <Button
                                variant="secondary"
                                className='bg-[#003399] cursor-pointer text-white font-semibold hover:bg-blue-800 ml-4'
                            >
                                Join the Waitlist
                            </Button>
                            </Link>
                        </ul>
                    </div>
                </div>

                {/* Hamburger Icon (Mobile) */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden focus:outline-none text-blue-600"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 h-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                {/* Mobile Drawer */}
                <div
                    className={`fixed top-0 right-0 h-full w-full bg-white/30 backdrop-blur-lg shadow-lg transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
                        } z-40`}
                >
                    <div className="flex justify-between items-center p-4 border-b border-white/30">
                        <img src={Logo} className='w-15' />
                        <button onClick={closeMenu} className="text-[#485d92] focus:outline-none">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-8 h-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <ul className="flex flex-col space-y-3  bg-[#485d92] text-gray-800 font-medium px-6">
                        <li><a href="/" onClick={closeMenu} className="hover:text-blue-600">Home</a></li>
                        <hr className="border-white/30" />
                        <li><a href="#about" onClick={closeMenu} className="hover:text-blue-600">About</a></li>
                        <hr className="border-white/30" />
                        <li><a href="#feature" onClick={closeMenu} className="hover:text-blue-600">Core Features</a></li>
                        <hr className="border-white/30" />
                    </ul>
                </div>
                {/* Overlay behind the drawer */}
                {isOpen && (
                    <div
                        onClick={closeMenu}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden"
                    />
                )}
            </div>
        </nav>
    )
}

export default Navigation
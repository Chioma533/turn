import React from 'react'
import Logo from '../../../assets/images/turn-logo-transparent.png'
import {Button} from '../../../components/ui/button'
const Navigation = () => {

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Contact', href: '#contact' },
    ]
    return (
        <nav className='sticky top-0 z-30 backdrop-blur-lg bg-accent'>
            <div className='max-w-7xl mx-auto px-8 flex justify-between items-center'>
                {/* Turn Logo */}
                <div className='shrink-0'>
                    <img src={Logo} loading='lazy' className='w-18' />
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
                            <Button 
                                variant="secondary"
                                className='bg-[#003399] cursor-pointer text-white font-semibold hover:bg-blue-800 ml-4'
                            >
                                Join the Waitlist
                            </Button>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation
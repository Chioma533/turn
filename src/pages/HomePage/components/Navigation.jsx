import React, { useState } from 'react'
import Logo from '../../../assets/images/turn-logo-transparent.png'
import { Button } from '../../../components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Contact', href: '#contact' },
    ]

    return (
        <nav className='sticky top-0 z-30 backdrop-blur-lg bg-accent'>
            <div className='max-w-7xl mx-auto md:px-8 px-4 flex justify-between items-center'>
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

                {/* Mobile Menu */}
                <div className="md:hidden">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <button
                                onClick={() => setIsOpen(true)}
                                className="flex items-center justify-center h-8 w-8 rounded-2xl bg-transparent hover:bg-gray-100 active:scale-95 transition-all"
                            >
                                <Menu className="h-10 w-10 text-gray-900" />
                            </button>
                        </SheetTrigger>

                        <SheetContent
                            side="top"
                            className="p-4 bg-white relative"
                        >

                            {/* Custom big close button */}
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute right-6 top-6 flex items-center justify-center h-14 w-14 rounded-xl hover:bg-gray-100 active:scale-95 transition-all z-50"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-9 w-9 text-gray-900"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <div className="flex flex-col items-center space-y-6 mt-16">
                                {navItems.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className="text-lg font-medium text-gray-700 hover:text-gray-900"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </a>
                                ))}
                                <Button onClick={() => setIsOpen(false)}>Get Started</Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    )
}

export default Navigation
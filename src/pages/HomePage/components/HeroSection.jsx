import React from 'react'
import { Button } from '../../../components/ui/button'
import Image1 from '../../../assets/images/HeroImage1.5.jpg'
import Image2 from '../../../assets/images/team-growth1.5.jpg'

const HeroSection = () => {
    return (
        <section className='relative overflow-hidden py-10 md:py-25 bg-accent flex items-center'>
            <div className='w-7xl mx-auto px-4 sm:px-6'>
                <div className='grid md:grid-cols-2 gap-4 items-center px-6 py-6'>
                    <div className="space-y-2 md:space-y-4">
                        <h1 className="text-3xl md:text-5xl leading-tight font-bold capitalize">Experience the job before you land it</h1>
                        <p className="text-lg leading-relaxed text-muted-foreground">Break the Experience barrier with hands-on simulations. build your portfolio and land your dream job</p>
                        <div className='mt-10 md:mt-15 space-x-7'>
                            <Button variant='secondary' size='lg' className='bg-[#003399] text-lg text-white hover:bg-blue-800 cursor-pointer mb-4'>Join the waitlist</Button>
                            <Button variant='secondary' size='lg' className='bg-blue-200 text-lg text-[#2A087A] hover:bg-blue-300 cursor-pointer mb-4'>Learn more</Button>
                        </div>
                    </div>
                    <div className='hidden md:block'>
                        <div className="relative ">
                            <div className='px-5 w-75 h-75 bg-cover font-bold absolute left-20 -top-50 z-10 rounded-lg overflow-hidden bg-no-repeat' style={{
                                backgroundImage: `url(${Image1})`
                            }}>
                            </div>
                            <div className='px-5 w-75 h-75 bg-cover absolute left-60 -top-20 font-bold rounded-lg overflow-hidden bg-no-repeat' style={{
                                backgroundImage: `url(${Image2})`
                            }}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default HeroSection
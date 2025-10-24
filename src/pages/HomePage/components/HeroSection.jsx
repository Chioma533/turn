import React from 'react'
import { Button } from '../../../components/ui/button'
import Image1 from '../../../assets/images/HeroImage.jpeg'
import Image2 from '../../../assets/images/team-growth2.jpeg'

const HeroSection = () => {
    return (
        <section className='relative overflow-hidden py-25 lg:py-20 bg-accent'>
            <div className='w-7xl mx-auto px-4 sm:px-6'>
                <div className='grid grid-cols-2 gap-4 items-center px-6 py-6'>
                    <div className="space-y-4">
                        <h1 className="text-3xl lg:text-5xl leading-tight font-bold capitalize">Experience the job before you land it</h1>
                        <p className="text-lg leading-relaxed text-muted-foreground">Break the Experience barrier with hands-on simulations. build your portfolio and land your dream job</p>
                        <div className='mt-15 space-x-7'>
                            <Button variant='secondary' size='lg' className='bg-[#003399] text-lg text-white hover:bg-blue-800 cursor-pointer'>Join the waitlist</Button>
                            <Button variant='secondary' size='lg' className='bg-blue-200 text-lg text-[#2A087A] hover:bg-blue-300 cursor-pointer'>Learn more</Button>
                        </div>
                    </div>
                    <div className="relative ">
                        <img src={Image1} className='w-70 absolute -top-50 z-10 rounded-lg'/>
                        <img src={Image2} className='w-70 absolute left-40 -top-20 rounded-lg' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
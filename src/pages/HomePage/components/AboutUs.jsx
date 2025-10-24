import React from 'react'
import TeamImage from '../../../assets/images/team-work.jpg'
import LearnersImage from '../../../assets/images/learners.jpg'
const AboutUs = () => {
    return (
        <section className='bg-[#485d92]'>
            <div className='max-w-7xl mx-auto px-2 md:px-8 py-10'>
                <h2 className='text-3xl md:text-4xl font-bold text-center mb-4'>About Us</h2>
                <div className='grid lg:grid-cols-2 items-center md:space-x-20'>
                    <div className="space-y-8">
                        <div className="bg-[#485d92] space-y-4 px-8 py-4 shadow-secondary-foreground  shadow-md rounded-lg">
                            <h1 className="text-2xl md:text-3xl font-bold mb-4">Our Vision</h1>
                            <p className="text-medium md:text-lg leading-relaxed text-[#ffffff] font-medium">
                                Our vision is to become the go-to
                                platform for practical career readiness,
                                where anyone, anywhere, can experience
                                a job before they land it.
                            </p>
                        </div>
                        <div className="bg-[#485d92] space-y-4 px-8 py-4 shadow-secondary-foreground  shadow-md rounded-lg">
                            <h1 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h1>
                            <p className="text-medium md:text-lg text-[#ffffff] leading-relaxed font-medium">
                                Our mission at TURN is to make career
                                readiness practical, accessible, and real.
                                We believe everyone deserves a chance to
                                experience their dream job before landing
                                it, so they can grow, build confidence,
                                prove competence, and step into new
                                roles with clarity and skill.
                            </p>
                        </div>
                    </div>
                    <div className="relative hidden md:block">
                        <img src={TeamImage} alt="" className="w-70 absolute top-40 left-10 rounded-lg z-10" />
                        <img src={LearnersImage} alt="" className="absolute left-60 w-70 rounded-lg" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs
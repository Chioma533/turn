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
                   <div className='hidden md:block'>
                        <div className="relative ">
                            <div className='px-5 w-75 h-75 bg-center font-bold absolute left-10 -top-20 z-10 rounded-lg overflow-hidden bg-no-repeat' style={{
                                backgroundImage: `url(${TeamImage})`
                            }}>
                            </div>
                            <div className='px-5 w-75 h-75 bg-cover absolute left-70 -top-50 font-bold rounded-lg overflow-hidden bg-no-repeat' style={{
                                backgroundImage: `url(${LearnersImage})`
                            }}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs
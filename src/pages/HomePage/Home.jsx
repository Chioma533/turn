import React from 'react'
import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import HowItWorks from './components/HowItWorks'
import AboutUs from './components/AboutUs'
import OurFeatures from './components/OurFeatures'

const Home = () => {
    return (
        <div className='min-h-screen bg-background'>
            <Navigation />
            <HeroSection />
            <HowItWorks />
            <AboutUs />
            <OurFeatures />
        </div>
    )
}

export default Home
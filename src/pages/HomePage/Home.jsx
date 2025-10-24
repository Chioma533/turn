import React from 'react'
import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import HowItWorks from './components/HowItWorks'
import AboutUs from './components/AboutUs'
import OurFeatures from './components/OurFeatures'
import Footer from './components/Footer'

const Home = () => {
    return (
        <div className='min-h-screen bg-background'>
            <Navigation />
            <HeroSection />
            <HowItWorks />
            <AboutUs />
            <OurFeatures />
            <Footer />
        </div>
    )
}

export default Home
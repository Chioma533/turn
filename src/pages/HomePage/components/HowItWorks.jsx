import React from 'react'
import TradImage from '../../../assets/images/team-growth.jpeg'
import TradPath from '../../../assets/images/team-growth2.jpeg'
import { ImCross } from "react-icons/im";
import { FaCheck } from "react-icons/fa";
import { FaRegCompass } from "react-icons/fa";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { IoBookOutline } from "react-icons/io5";
import { LuFileCheck } from "react-icons/lu";
import { BiFirstAid } from "react-icons/bi";


const HowItWorks = () => {
    return (
        <section className='bg-[#485d92]'>
            <div className='max-w-7xl mx-auto px-2 md:px-8 py-15'>
                <h2 className='text-4xl font-bold text-center mb-4'>How It Works</h2>
                <p className='text-medium md:text-2xl leading-tight text-center text-muted foreground mb-12'>
                    You need experience to get hired, but you need to get hired to gain experience.
                    TURNVE breaks
                    the cycle by providing real world experience through interactive simulations.
                </p>
                <div className=' grid md:grid-cols-2 mb-10 gap-10 md:gap-40'>
                    <div className=''>
                        <div className="bg-[#ffffff] rounded-lg px-5 md:px-10 py-4 shadow-lg shadow-accent-foreground">
                            <h1 className='font-medium text-2xl mb-4'>Traditional Path</h1>
                            <div className='px-5 h-72 bg-cover font-bold rounded-lg overflow-hidden bg-no-repeat' style={{
                                backgroundImage: `url(${TradPath})`
                            }}>
                            </div>
                            <div className='space-y-4 mt-4 text-muted-foreground'>
                                <p className="flex items-center gap-2"> <ImCross className='text-red-600 text-lg' />No practical experience</p>
                                <p className="flex items-center gap-2"> <ImCross className='text-red-600 text-lg' />No practical experience</p>
                                <p className="flex items-center gap-2"> <ImCross className='text-red-600 text-lg' />No practical experience</p>
                            </div>
                        </div>
                        <div className='flex items-center justify-center py-6 flex-col'>
                            <div className='bg-[#ffffff] w-15 h-15 rounded-full flex items-center justify-center shadow-2xl shadow-accent-foreground'>
                                <FaRegCompass className='text-gray-400 text-3xl' />
                            </div>
                            <p className='mt-1 text-2xl font-medium'>Choose a role</p>
                        </div>
                    </div>
                    <div>
                        <div className="bg-[#ffffff] rounded-lg md:px-10 py-4 px-5 shadow-lg shadow-accent-foreground">
                            <h1 className='font-medium text-2xl mb-4'>Our Solution</h1>
                            <div className='px-5 h-72 bg-center font-bold rounded-lg overflow-hidden bg-no-repeat' style={{
                                backgroundImage: `url(${TradImage})`
                            }}>
                            </div>
                            <div className='space-y-4 mt-4 text-muted-foreground'>
                                <p className="flex items-center gap-2"> <FaCheck className='text-green-500 text-lg' />Hands-on project simulations</p>
                                <p className="flex items-center gap-2"> <FaCheck className='text-green-500 text-lg' />Automated portfolio builder</p>
                                <p className="flex items-center gap-2"> <FaCheck className='text-green-500 text-lg' />Job-ready confidence</p>
                            </div>
                        </div>
                        <div className='flex items-center justify-center py-6 flex-col'>
                            <div className='bg-[#ffffff] w-15 h-15 rounded-full flex items-center justify-center shadow-2xl shadow-accent-foreground'>
                                <HiOutlineRocketLaunch className='text-gray-400 text-3xl' />
                            </div>
                            <p className='mt-1 text-2xl font-medium'>Build proof & confidence</p>

                        </div>
                    </div>
                </div>

                {/* Steps to career */}
                <div className='py-10'>
                    <div className='text-center'>
                        <h2 className="font-bold text-3xl md:4xl capitalize mb-3">Your 3 steps to a career</h2>
                        <p className='text-lg md:text-2xl text-gray-300 mb-10'>A clear path to break into career and land your dream role</p>
                    </div>

                    <div className='grid md:grid-cols-3 gap-10'>
                        <div className='bg-white p-6 rounded-lg shadow-md shadow-accent-foreground relative text-center space-y-4'>
                            <div className='flex items-center justify-center'>
                                <IoBookOutline className='text-[#003399] text-5xl text-center' />
                            </div>
                            <h3 className='text-2xl font-bold mb-4'>Learn</h3>
                            <p className='font-medium text-md'>Complete interactive lessons and scenerios with your AI coach.</p>
                            <div className='bg-green-400 text-[#ffffff] w-13 h-13 rounded-full flex items-center justify-center font-bold text-2xl absolute -top-5 -left-2'>1</div>
                        </div>
                        <div className='bg-white p-6 rounded-lg shadow-md shadow-accent-foreground text-center relative space-y-4'>
                            <div className='flex items-center justify-center'>
                                <LuFileCheck className='text-[#003399] text-5xl text-center' />
                            </div>
                            <h3 className='text-2xl font-bold mb-4'>Build</h3>
                            <p className='font-medium text-md'>Create a professional portfolio showcasing your project experience.</p>
                            <div className='bg-green-400 text-[#ffffff] w-13 h-13 rounded-full flex items-center justify-center font-bold text-2xl absolute -top-5 -left-2'>2</div>
                        </div>
                        <div className='bg-white p-6 rounded-lg shadow-md shadow-accent-foreground text-center relative space-y-4'>
                            <div className='flex items-center justify-center'>
                                <BiFirstAid className='text-[#003399] text-5xl text-center' />
                            </div>
                            <h3 className='text-2xl font-bold mb-4'>Hire</h3>
                            <p className='font-medium text-md'>Apply to jobs with confidence and showcase your practical experience.</p>
                            <div className='bg-green-400 text-[#ffffff] w-13 h-13 rounded-full flex items-center justify-center font-bold text-2xl absolute -top-5 -left-2'>3</div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks
import React from 'react'
import { FiMessageSquare } from "react-icons/fi";
import { FiBarChart2 } from "react-icons/fi";
import { RxFileText } from "react-icons/rx";
import { BiFirstAid } from "react-icons/bi";
import { Button } from '../../../components/ui/button';


const OurFeatures = () => {
    const features = [
        {
            icon: <FiMessageSquare />,
            title: 'AI Teacher',
            description: 'Learn from an AI coach that adapts to your pace and provides personalized feedback on your project decisions',
        },
        {
            icon: <FiBarChart2 />,
            title: 'AI Teacher',
            description: 'Learn from an AI coach that adapts to your pace and provides personalized feedback on your project decisions',
        },
        {
            icon: <RxFileText />,
            title: 'AI Teacher',
            description: 'Learn from an AI coach that adapts to your pace and provides personalized feedback on your project decisions',
        },
        {
            icon: <BiFirstAid />,
            title: 'AI Teacher',
            description: 'Learn from an AI coach that adapts to your pace and provides personalized feedback on your project decisions',
        },
    ]

    return (
        <section className='bg-[#D9D9D9]'>
            <div className='max-w-7xl mx-auto md:px-8 py-10'>
                <div className='text-center'>
                    <h1 className='mb-4 md:mb-10 text-center font-bold text-3xl md:text-4xl'>Core Features</h1>
                </div>
                <div className='grid md:grid-cols-2 gap-x-40 gap-y-4 p-4'>
                    {features.map((feature, index) => {
                        return (
                            <div key={index} className='flex items-start space-y-8 mb-8 bg-[#ffffff] shadow-card-foreground shadow-md py-8 px-8 rounded-lg '>
                                <div className='space-y-2'>
                                    <h2 className='text-lg md:text-2xl font-bold flex items-center gap-2'><span className='text-[#485d92] text-3xl'>{feature.icon}</span>{feature.title}</h2>
                                    <p className='text-medium md:text-lg text-muted-foreground'>{feature.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="text-center pt-20 space-y-4">
                    <p className="text-gray-500 text-shadow-md text-medium md:text-lg">Built by early stage founders</p>
                    <h2 className="text-lg md:text-2xl font-medium">Join a  100+ others on the waitlist</h2>
                    <Button
                        variant="secondary"
                        className='bg-[#003399] cursor-pointer text-white font-semibold hover:bg-blue-800 mt-4'
                    >
                        Join the Waitlist
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default OurFeatures
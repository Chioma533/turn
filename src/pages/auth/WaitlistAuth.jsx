import React, { useState } from 'react'
import Logo from '../../assets/images/TurnveLogo.svg'
import { Button } from '../../components/ui/button'
import { HiOutlineMail } from 'react-icons/hi'
import { FiLinkedin } from 'react-icons/fi'
import { FaFacebook } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { Card, CardContent } from '../../components/ui/card'
import { Input } from '../../components/ui/input'


export default function WaitlistAuth() {

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        areaOfInterest: "",
        turnInfo: ""
    });


    return (
        <section className="min-h-screen bg-[#485d92]" id='#join'>
            <div className="max-w-7xl mx-auto px-2 md:px-5 py-10 flex flex-col">
                <div className="">
                    <img src={Logo} alt="" className="w-20" />
                </div>
                <div className="flex flex-col mt-5 justify-center items-center">
                    <h2 className="text-[#ffffff] text-4xl font-bold">Join the Waitlist</h2>
                    <p className="pt-2 max-w-3xl text-center md:text-2xl text-sm font-medium leading-relaxed text-gray-400">Be the first to experience the new way of learning by doing.</p>
                    <Card className="bg-card/10 backdrop-blur-md shadow-sm rounded-2xl shadow-elevated p-8 border border-border w-2xl">
                        <CardContent>
                            <form className="space-y-6">
                                <div className="space-y-2">
                                    <label htmlFor="fullName" className='block text-sm font-medium text-foreground mb-2'>Full Name *</label>
                                    <Input
                                        id="fullName"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={""}
                                        required
                                        className="h-12"
                                    />
                                </div>
                                <div className="">
                                    <label htmlFor="email" className='block text-sm font-medium text-foreground mb-2'>Email</label>
                                    <Input
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={""}
                                        required
                                        className="h-12"
                                    />                                </div>
                                <div className="">
                                    <label htmlFor="areaOfInterest" className='block text-sm font-medium text-foreground mb-2'>Area of interest</label>
                                    <Input
                                        id="areaOfInterest"
                                        name="areaOfInterest"
                                        value={formData.areaOfInterest}
                                        onChange={""}
                                        required
                                        className="h-12"
                                    />                                </div>
                                <div className="">
                                    <label htmlFor="turnInfo" className='block text-sm font-medium text-foreground mb-2'>How did you hear about turn <span>(optional)</span></label>
                                    <Input
                                        id="turnInfo"
                                        name="turnInfo"
                                        value={formData.turnInfo}
                                        onChange={""}
                                        required
                                        className="h-12"
                                    />
                                </div>

                                <div className=" text-center">
                                    <Button type="submit" className=" w-[90%] h-12 font-semibold bg-linear-to-br from-primary/10 via-[#485d92] to-secondary/10 hover:cursor-pointer ">Join Now</Button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>

                <div className="flex justify-between text-center mt-10">
                    <div className="flex text-center">
                        <img src={Logo} alt="" className="w-25" />
                    </div>
                    <div className="gap-3 flex items-center justify-baseline">
                        <div className='text-black flex items-center justify-center w-8 h-8 md:w-10 md:h-10  hover:bg-[#485d92] text-lg md:text-3xl transition hover:text-white cursor-pointer hover:mb-0.5'>
                            <Link to='https://x.com/TURN_2025?t=IyoYOQiR9PanCsUdALOxHA&s=09'>
                                <FaXTwitter />
                            </Link>
                        </div>
                        <div className='text-black flex items-center justify-center w-8 h-8 md:w-10 md:h-10 hover:bg-[#485d92] text-lg md:text-3xl transition hover:text-white cursor-pointer hover:mb-0.5'>
                            <Link to='https://www.facebook.com/profile.php?id=61581032177886'>
                                <FaFacebook />
                            </Link>
                        </div>
                        <div className='text-black flex items-center justify-center w-8 h-8 md:w-10 md:h-10 hover:bg-[#485d92] text-lg md:text-3xl transition hover:text-white cursor-pointer hover:mb-0.5'>
                            <Link to='https://x.com'>
                                <FiLinkedin />
                            </Link>
                        </div>
                        <div className='text-black flex items-center justify-center w-8 h-8 md:w-10 md:h-10 hover:bg-[#485d92] text-lg md:text-3xl transition hover:text-white cursor-pointer hover:mb-0.5'>
                            <Link to='turn9751@gmail.com'>
                                <HiOutlineMail />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


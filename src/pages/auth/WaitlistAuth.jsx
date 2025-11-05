import React, { useState } from 'react'
import Logo from '../../assets/images/TurnveLogo2.svg'
import { Button } from '../../components/ui/button'
import { HiOutlineMail } from 'react-icons/hi'
import { FiLinkedin } from 'react-icons/fi'
import { FaFacebook } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { Card, CardContent } from '../../components/ui/card'
import { Input } from '../../components/ui/input'
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '../../components/ui/select'

export default function WaitlistAuth() {

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        areaOfInterest: "",
        turnInfo: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSelectChange = (value) => {
        setFormData((prev) => ({
            ...prev,
            areaOfInterest: value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
    }


    return (
        <section className="min-h-screen bg-[#485d92]" id='#join'>
            <div className="max-w-7xl mx-auto px-2 md:px-5 py-2 flex flex-col">
                <div className="">
                    <img src={Logo} alt="" className="w-20" />
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-[#ffffff] text-3xl font-bold">Join the Waitlist</h2>
                    <p className="py-2 max-w-3xl text-center md:text-lg text-sm font-medium leading-relaxed text-gray-400">Be the first to experience the new way of learning by doing.</p>
                    <Card className="bg-card/10 backdrop-blur-md shadow-sm rounded-2xl shadow-elevated p-8 w-2xl border-0">
                        <form className="space-y-6">
                            <CardContent>
                                <div className="space-y-2">
                                    <label htmlFor="fullName" className='mt-1 block text-sm font-medium text-foreground mb-2'>Full Name *</label>
                                    <Input
                                        id="fullName"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        required
                                        className="h-10 border-0 bg-[#d9d9d9]/30"
                                        placeholder="Enter Your full name"
                                    />
                                </div>
                                <div className="">
                                    <label htmlFor="email" className='mt-1 block text-sm font-medium text-foreground mb-2'>Email Address</label>
                                    <Input
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="h-10 border-0 bg-[#d9d9d9]/30"
                                        placeholder="your@gmail.com"
                                    />                                </div>
                                <div className="">
                                    <label htmlFor="areaOfInterest" className='mt-1 block text-sm font-medium text-foreground mb-2'>Area of interest</label>
                                    <Select onValueChange={handleSelectChange}>
                                        <SelectTrigger className="h-10 w-full border-0 bg-[#d9d9d9]/30 text-white">
                                            <SelectValue placeholder="Select your area of interest" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-[#485d92] text-white">
                                            <SelectItem value="design">Design</SelectItem>
                                            <SelectItem value="ai">Artificial Intelligence</SelectItem>
                                            <SelectItem value="development">Development</SelectItem>
                                            <SelectItem value="product">Product Management</SelectItem>
                                            <SelectItem value="marketing">Marketing</SelectItem>
                                            <SelectItem value="data-science">Data Science</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="">
                                    <label htmlFor="turnInfo" className='mt-1 block text-sm font-medium text-foreground mb-2'>How did you hear about turn <span>(optional)</span></label>
                                    <Input
                                        id="turnInfo"
                                        name="turnInfo"
                                        value={formData.turnInfo}
                                        onChange={handleChange}
                                        required
                                        className="h-10 border-0 bg-[#d9d9d9]/30"
                                        placeholder="Social Media, Search Engine ... or ?"
                                    />
                                </div>
                            </CardContent>
                            <div className=" text-center">
                                <Button type="submit" className=" w-[50%] h-12 font-semibold bg-linear-to-br from-[#003399] via-[#003399] to-[#485d92] hover:cursor-pointer ">Join Now</Button>
                            </div>
                        </form>
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


import React from 'react'
import Logo from '../../assets/images/TurnveLogo.svg'
import { Button } from '../../components/ui/button'
import { HiOutlineMail } from 'react-icons/hi'
import { FiLinkedin } from 'react-icons/fi'
import { FaFacebook } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'


const WaitlistAuth = () => {
    return (
        <section className="bg-[#485d92]" id='#join'>
            <div className="max-w-7xl mx-auto px-2 md:px-5 py-15 flex flex-col">
                <div className="">
                    <img src={Logo} alt="" className="w-20" />
                </div>
                <div className="">
                    <h2 className="">Join the Waitlist</h2>
                    <p className="">Be the first to experience the new way of learning by doing.</p>
                    <div className="">
                        <form action="" className="">
                            <div className="">
                                <label htmlFor="">Full Name</label>
                                <input type="text" className="" />
                            </div>
                            <div className="">
                                <label htmlFor="">Email</label>
                                <input type="text" className="" />
                            </div>
                            <div className="">
                                <label htmlFor="">Area of interest</label>
                                <input type="text" className="" />
                            </div>
                            <div className="">
                                <label htmlFor="">How did you hear about turn <span>(optional)</span></label>
                                <input type="text" className="" />
                            </div>
                        </form>
                        <Button>Join Now</Button>
                    </div>
                </div>

                <div className="flex justify-between text-center mt-15 px-10">
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

export default WaitlistAuth
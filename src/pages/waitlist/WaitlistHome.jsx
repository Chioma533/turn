import React from 'react'
import Logo from '../../assets/images/TurnveLogo.svg'
import { Link } from 'react-router-dom'
import { Button } from '../../components/ui/button'
import { FaXTwitter } from 'react-icons/fa6'
import { FaFacebook } from 'react-icons/fa'
import { FiLinkedin } from 'react-icons/fi'
import { HiOutlineMail } from 'react-icons/hi'

const WaitlistHome = () => {
  return (
    <section className='bg-[#485d92] h-screen' id='#waitlist'>
      <div className="max-w-7xl mx-auto px-2 md:px-10 py-15 flex flex-col items-center">
        <img src={Logo} alt="" className="md:w-80 w-50" />
        <h2 className="md:pt-10 pt-5 md:text-4xl text-3xl font-bold text-[#ffffff] leading-tight">Learn By Doing</h2>
        <p className="pt-2 max-w-3xl text-center md:text-2xl text-sm font-medium leading-relaxed text-gray-400">We are building a new way to build skill through action, not just theory</p>
        <div className="mt-15 bg-gray-400 rounded-3xl w-[40%] flex justify-end items-center">
          <Link to= "/join">
            <Button
              variant="secondary"
              className="bg-[#4e5a94] my-0.5 mx-0.5 cursor-pointer rounded-3xl text-white text-lg hover:bg-[#003399] py-2 ml-4 font-medium"
              size="lg"
            >
              Join the Waitlist
            </Button>
          </Link>
        </div>
        <p className="pt-1.5 text-center font-medium leading-relaxed text-gray-400">Be the first to know when we launch</p>
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
    </section>
  )
}

export default WaitlistHome
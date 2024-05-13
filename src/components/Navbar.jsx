import { useState } from 'react'
import { AiOutlineClose, AiOutlineHome, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
import { PiStudent, PiToolbox } from "react-icons/pi";
import logo from "/src/assets/logo.png"

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const toggleNav = () => setNav(!nav);
  return (
    <div>
        <img src={logo} alt="Logo" className='z-[99] w-12 absolute top-2 left-2 md:w-18 md:top-4 md:left-4'/>
        {nav ? (
            <>
            <div className='fixed top-0 right-0 md:hidden rounded-full shadow-lg bg-white/65 shadow-gray-400 m-2 p-5 cursor-pointer z-[99]'>
            <AiOutlineClose size={24} onClick={toggleNav} className='fixed top-4 right-4 z-[99] md:hidden'/>
            </div>
            <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20 md:hidden'>
                <a onClick={toggleNav} href="#home" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-200'>
                    <AiOutlineHome size={20}/>
                    <span className='pl-4'>Home</span>
                </a>
                <a onClick={toggleNav} href="#about" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-200'>
                    <BsPerson size={20}/>
                    <span className='pl-4'>About</span>
                </a>
                <a onClick={toggleNav} href="#projects" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-200'>
                    <FaLaptopCode size={20}/>
                    <span className='pl-4'>Projects</span>
                </a>
                <a onClick={toggleNav} href="#skills" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-200'>
                    <PiToolbox size={20}/>
                    <span className='pl-4'>Skills</span>
                </a>
                <a onClick={toggleNav} href="#edu" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-200'>
                    <PiStudent size={20}/>
                    <span className='pl-4'>Education</span>
                </a>
                <a onClick={toggleNav} href="#contact" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-200'>
                    <AiOutlineMail size={20}/>
                    <span className='pl-4'>Contact</span>
                </a>
            </div>
            </>
        )
        : (
            <div className='fixed top-0 right-0 md:hidden rounded-full shadow-lg bg-white/65 shadow-gray-400 m-2 p-5 cursor-pointer z-[99]'>
                <AiOutlineMenu size={24} onClick={toggleNav} className='fixed top-4 right-4 z-[99] md:hidden'/>
            </div>
        )
        }
        <div className='md:block hidden fixed top-[20%] z-10'>
            <div className='flex flex-col'>
                <a href="#home" className='flex rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-200'>
                    <AiOutlineHome size={20}/>
                </a>
                <a href="#about" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-200'>
                    <BsPerson size={20}/>
                </a>
                <a href="#projects" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-200'>
                    <FaLaptopCode size={20}/>
                </a>
                <a href="#skills" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-200'>
                    <PiToolbox size={20}/>
                </a>
                <a href="#edu" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-200'>
                    <PiStudent size={20}/>
                </a>
                <a href="#contact" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-200'>
                    <AiOutlineMail size={20}/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Navbar
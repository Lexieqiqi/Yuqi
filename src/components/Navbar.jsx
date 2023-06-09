"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useRouter } from 'next/router';
import ProfileImg from "@images/IMG_5653.jpg"
import LogoImg from "@images/logo.png"
import { Link as ScrollLink } from 'react-scroll';
import { MdOndemandVideo } from 'react-icons/md'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)
    const [navBg, setNavBg] = useState('#ecf0f3')
    const [linkColor, setLinkColor] = useState('#1f2937')
    const router = useRouter()

    useEffect(() => {
        console.log(router.asPath); 
        if (
            router.asPath === '/searchengine' ||
            router.asPath === '/gallang' ||
            router.asPath === '/furhat' 
        ) {
            setNavBg('transparent')
            setLinkColor('#ecf0f3')
        } else {
            setNavBg('transparent')
            setLinkColor('#1f2937')
        }
    }, [router])
    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY > 90) {
                setShadow(true)
            } else {
                setShadow(false)
            }
        };
        window.addEventListener('scroll', handleShadow)
    }, []);
    

    return (
        <div style={{ backgroundColor: `${navBg}` }} 
        className={ `fixed top-0 w-full h-20 z-[100]  ${shadow ? 'shadow-xl' : ''}`}>
            <div className='flex items-center justify-between w-full h-full px-2 2xl:px-16 py-2'>
                <Link href='/'>
                    <Image id="pi" src={ProfileImg} width='80' height='10' alt='logo' priority={true} style={{ objectFit: 'contain', maxHeight: '80%' }} />
                </Link>
                <div>
                    <ul style={{color: `${linkColor}`}} className='hidden md:flex'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link href='/#home' scroll={false}>
                            Home
                            </Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link href='/#about' scroll={false} >
                                About
                            </Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link href='/#skills' scroll={false}>
                                Skills
                            </Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link href='/#projects' scroll={false}>
                                Project
                            </Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link href='/#contact' scroll={false}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <div onClick={handleNav} className='md:hidden'>
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>
            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div className={nav ? 'md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <Image src={LogoImg} alt='/' width={97} height='35' />
                            <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                                <AiOutlineClose size={25} />
                            </div>
                        </div>
                        <div className='border-b border-gray-300 my-4'>
                            <p className='w-[85%] md:w-[90%] py-4'> Let&apos;s fuck the world using leverage!</p>
                        </div>
                    </div>
                    <div className='py-4 flex flex-col'>
                        <ul className='uppercase'>
                            <Link href='/' scroll={false}>
                                <li onClick={()=>setNav(false)} className='py-4 text-sm'>Home</li>
                            </Link>
                            <Link href='/#about' scroll={false}>
                                <li onClick={()=>setNav(false)} className='py-4 text-sm'>About</li>
                            </Link>
                            <Link href='/#skills' scroll={false}>
                                <li onClick={()=>setNav(false)} className='py-4 text-sm'>Skills</li>
                            </Link>
                            <Link href='/#projects' scroll={false}>
                                <li onClick={()=>setNav(false)} className='py-4 text-sm'>Project</li>
                            </Link>
                            <Link href='/#contact' scroll={false}>
                                <li onClick={()=>setNav(false)} className='py-4 text-sm'>Contact</li>
                            </Link>
                        </ul>
                        <div className='pt-40'>
                            <p className='uppercase tracking-widest text-[#5651e5'> Let&apos;s connect</p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                                    <Link href='https://www.linkedin.com/in/yuqi-liu-158b17193/'>
                                        <FaLinkedin size={25} />
                                    </Link>
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                                    <Link href='https://github.com/Lexieqiqi'>
                                        <FaGithub size={25} />
                                    </Link>
                                </div>
                                <a target="_blank" href='https://space.bilibili.com/219617942?spm_id_from=333.1007.0.0'>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-115 ease-in duration-500' title="Visit Bilibili">
                                        <MdOndemandVideo size={25} title='Bilibili'/>
                                    </div>
                                </a>
                                <a target='_blank' href='https://lexieqiqi.github.io/Yuqi/cv.pdf'>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-115 ease-in duration-500' title='Check out my CV'>
                                        <BsFillPersonLinesFill size={25} title='CV'/>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar

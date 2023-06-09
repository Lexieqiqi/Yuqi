import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
import { MdOndemandVideo } from 'react-icons/md'
import Link from 'next/link';

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen flex items-center'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Contact</p>
            <h2 className='py-4'>Get in touch</h2>
            <div className='grid lg:grid-cols-5 gap-8'>
                {/*left*/}
                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'> 
                    <div className='lg:p-4 h-full'>
                        <div>
                            <img className='rounded-xl hover:scale-105 ease-in duration-300' src="https://images.unsplash.com/photo-1497493292307-31c376b6e479?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"></img>
                        </div>
                        <div>
                            <h2 className='py-2'>Yuqi Liu</h2>
                            <p>Software Developer</p>
                            <p>I am available for freelance or full-time position. Contact me and let's talk.</p>
                        </div>
                        <div>
                            <p className='uppercase pt-8'>Connect with Me</p>
                            <div className='flex items-center justify-between py-4'>
                            <a target='_blank' href='https://www.linkedin.com/in/yuqi-liu-158b17193/'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-115 ease-in duration-500' title='Visit LinkedIn'>
                            <FaLinkedin size={25} title='LinkedIn'/>
                        </div>
                    </a>
                    <a target='_blank' href='https://github.com/Lexieqiqi'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-115 ease-in duration-500' title='Check out Github'>
                            <FaGithub size={25} title='Github'/>
                        </div>
                    </a>
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
                { /* right */}
                <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                    <div className='p-4'>
                    <form>
                        <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'>Name</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' />
                            </div>
                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'>Phone Number</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' />
                            </div>
                        </div>
                        <div className='flex flex-col py-2'>
                            <label className='uppercase text-sm py-2'>Email</label>
                            <input className='border-2 rounded-lg p-3 flex border-gray-300' type='email' />
                        </div>
                        <div className='flex flex-col py-2'>
                            <label className='uppercase text-sm py-2'>Subject</label>
                            <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' />
                        </div>
                        <div className='flex flex-col py-2'>
                            <label className='uppercase text-sm py-2'>Message</label>
                            <textarea className='border-2 rounded-lg p-3 flex border-gray-300' />
                        </div>
                        <button className='w-full p-4 text-gray-100 mt-4'>Send Message</button>
                    </form>
                    </div>
                </div>
            </div>
            <div className='flex justify-center py-12'>
                <Link href="/#home">
                    <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <HiOutlineChevronDoubleUp className='text=[#5651e5]' size={30}/>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Contact
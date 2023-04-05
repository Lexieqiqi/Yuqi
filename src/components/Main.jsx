import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Link from 'next/link'
import { MdOndemandVideo } from 'react-icons/md'


const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[2240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-800'>Let&apos;s explore this world together!</p>
                <h1 className='py-4 text-gray-700'>Hi, I&apos;m <span className='text-[#dc72db]'>Yuqi</span></h1>
                <h2 className='py-2 text-gray-700'>
                    A Software Engineer
                </h2>
                <p className='py-4 text-gray-800 max-w-[70%] m-auto'>
                虚无主义者在这浮华世界里寻找没有意义的意义。
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
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
  )
}

export default Main
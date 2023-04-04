import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Link from 'next/link'

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
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-500'>
                        <Link href='https://www.linkedin.com/in/yuqi-liu-158b17193/'>
                            <FaLinkedin size={25}/>
                        </Link>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-500'>
                        <Link href='https://github.com/Lexieqiqi'>
                            <FaGithub size={25}/>
                        </Link>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-500'>
                        <AiOutlineMail size={25}/>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-500'>
                        <BsFillPersonLinesFill size={25} />
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Main
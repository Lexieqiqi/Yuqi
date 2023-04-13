import React from 'react'
import Image from 'next/image'
import ProfileImg from "@images/IMG_5653.jpg"
import Link from "next/link"

const About = () => {
  return (
    <div id='about' className='z-10 w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1249px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p>
                Hello there! I am a curious problem-solver and a budding software engineer currently pursuing my master's degree at KTH, Sweden. For me, building things that make a difference in people's lives is more than just a job; it's a passion. From the moment I discovered the power of programming, I knew I had found my calling.
                <br />
                <br />
                But my interests extend beyond software engineering. As an AI enthusiast, I am captivated by the potential of intelligent machines to transform the world around us. Whether it's through computer vision, natural language processing, or deep learning, I believe that AI has the power to unlock new levels of innovation and creativity.
                <br />
                <br />
                At heart, I am a builder and a dreamer. I am always looking for new challenges to tackle and new technologies to master. If you're looking for someone who is dedicated, driven, and deeply passionate about creating meaningful solutions, then I am your person.            
                </p>    
                <p className='text-[#e59b51]'>
                I am exploring a diverse range of fields, embracing the joy of discovery in everything I do.
                </p>
                <a target='_blank' href='https://lexieqiqi.github.io/Yuqi/cv.pdf'>
                <p className='text-gray-600 underline cursor-pointer'>Check out my CV.</p>
                </a>
          
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image className='rounded-xl' src={ProfileImg} width='600' height='400' alt=''/>
            </div>
        </div>
    </div>
  )
}

export default About

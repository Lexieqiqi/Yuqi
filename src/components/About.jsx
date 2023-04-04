import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1249px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-600'>I am who I am..</p>
                <p>
                    I am currently a master student studying in KTH, Sweden. About to graduate soon. And I am a passionate person living my life with curiousity in my mind. 
                </p>
                <p className='text-gray-600'>
                    I am trying myself out in a large range of fields trying to have fun with the world.
                </p>
                <p className='text-gray-600 underline cursor-pointer'>Check out my latest projects.</p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image className='rounded-xl' src='/IMG_5653.jpg' width='350' height='150' alt=''/>
            </div>
        </div>
    </div>
  )
}

export default About
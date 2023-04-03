import React from 'react'
import gallangImg from "../../public/projects/gallang.png"
import Image from 'next/image'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const gallang = () => {
  return (
    <main>
      <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
          <div className='relative z-10' style={{ height: '100%', width: '100%' }}>
            <Image className='absolute' fill style={{ objectFit: 'contain'}} src={gallangImg} alt='Search Engine Image' />
            <div className='absolute top-0 left-0 w-full h-full bg-black/70 z-20'></div>
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-30 p-2'>
              <h2>Gallang</h2>
              <h3>React / javascript / Firebase</h3>
            </div>
          </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
          <div className='col-span-4'>
            <p>Project</p>
            <h2>Overview</h2>
            <p>Designers often create mood-boards, for example using Pinterest or Miro, to explore the design space. The images provided by these resources are often inconsistent in quality and the recommendation engines hinder, to some degree, truly imaginative and free inspiration. A digital mood-board bringing together several different sources of high-quality media, for example, stock photography, art galleries, fonts, etc. could lead to more effective exploration of the design space.</p>
            <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
            <button className='px-8 py-2 mt-4'>Code</button>
          </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>React</p>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Firebase</p>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Javascript</p>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Flask</p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
            <p className='underline cursor-pointer'>Back</p>
        </Link>
        </div>
      </div>
    </main>
  )
}

export default gallang

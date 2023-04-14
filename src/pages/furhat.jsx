import React from 'react'
import Image from 'next/image'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import furhatImg from "../../public/projects/furhat.png"

const furhat = () => {
  const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
  return (
    <main>
      <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
          <div className='relative z-10' style={{ height: '100%', width: '100%' }}>
            <Image className='absolute object-contain' fill src={furhatImg} alt='Furhat Image' />
            <div className='absolute top-0 left-0 w-full h-full bg-black/70 z-20'></div>
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-30 p-2'>
              <h2>Furhat</h2>
              <h3>Java / Social Robot / Furhat SDK</h3>
            </div>
          </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 grid-rows-4 gap-8 pt-8'>
          <div className='col-span-4 row-span-4'>
            <div className='row-span-3'>
              <p>Project</p>
              <h2 className='pb-4'>Overview</h2>
              <p>We explore how a social robot can facilitate women’s discussions about menstruation, an important topic still taboo to many. Informed by interviews with the target group, we designed and implemented an interaction about menstruation with a social robot. In a pilotstudy (N = 7), we explored how participants perceived the interaction, and the role of robot non-verbal expressions in this context.</p>
              <span>Paper Accepted PERSUASIVE 2021: Breaking the Taboo: Using a Social Robot to Raise Women’s Awareness of Menstrual Health</span>
            </div>
            <div className='pt-5 row-span-1'>
              <ReactPlayer className="object-contain shadow-xl shadow-gray-400 rounded-xl" url="https://www.youtube.com/watch?v=rVpzhL2VnkM" />
            </div>
          </div>
          <div className='col-span-4 md:col-span-1 row-span-2 shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='p-2'>
              <p className='text-center font-bold pb-2'>Technologies</p>
              <div className='grid grid-cols-3 md:grid-cols-1'>
                  <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>User Research</p>
                  <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Furhat SDK</p>
                  <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Dialog Logic</p>
                  <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Ueser Experience</p>
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

export default furhat
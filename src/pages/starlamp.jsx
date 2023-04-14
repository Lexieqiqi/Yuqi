import React from 'react'
import Image from 'next/image'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const starlamp = () => {
  return (
    <main>
      <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
          <div className='relative z-10' style={{ height: '100%', width: '100%' }}>
            <Image className='absolute object-contain' fill src="projects/starlamp.png" alt='StarLamp Image' />
            <div className='absolute top-0 left-0 w-full h-full bg-black/70 z-20'></div>
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-30 p-2'>
              <h2>Star Lamp</h2>
              <h3>Design / Innovation / User oriented Design</h3>
            </div>
          </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 grid-rows-4 gap-8 pt-8 '>
          <div className='col-span-4 row-span-4 min-h-0'>
            <p>Project</p>
            <h2 className='pb-4'>Overview</h2>
            <h4 className='p-3 pl-0'>Motivation</h4>
            <p>Few of us would have expected 2020 to turn out like this. Instead of spending time with family and friends, people have been forced to stay apart and minimise all types of physical interactions. With this project we want to address this problem and provide a product that makes it easier to cope with the situation.</p>
            <h3 className='p-4 pl-0'>Design Process</h3>
            <ul class="mb-8 space-y-4 text-left text-gray-500 dark:text-gray-400">
                <li class="flex items-center space-x-3">
                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    <span><span class="font-semibold text-gray-900 dark:text-white">Discover:</span> Exploring the problem space.</span>
                </li>
                <li class="flex items-center space-x-3">
                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    <span><span class="font-semibold text-gray-900 dark:text-white">Define: </span>Getting to know our users and finding possible solutions.</span>
                </li>
                <li class="flex items-center space-x-3">
                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    <span><span class="font-semibold text-gray-900 dark:text-white">Develop: </span> Deciding on a single solution.</span>
                </li>
                <li class="flex items-center space-x-3">
                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    <span><span class="font-semibold text-gray-900 dark:text-white">Deliver: </span>Putting it all together.</span>
                </li>
            </ul>
            <a href='https://www.figma.com/proto/qu5p2vokmmxaQjQ4Rd7K3H/Interface?node-id=115-605&starting-point-node-id=115%3A605' target="__blank__">
                <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
            </a>
            <a href='https://lexieqiqi.github.io/Yuqi/Workbook_A3_Final.pdf' target="__blank__">
                <button className='px-8 py-2 mt-4'>Presentation</button>
            </a>
          </div>
          <div className='col-span-4 md:col-span-1 row-span-2 min-h-0 shadow-xl shadow-gray-400 rounded-xl p-4 '>
            <div className='p-2 '>
                <p className='text-center font-bold pb-2'>Methodology</p>
                <div className='grid grid-cols-3 md:grid-cols-1'>
                    <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill size="16" className='pr-1'/>User Research</p>
                    <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill size="16" className='pr-1'/>Literature Review</p>
                    <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill size="16" className='pr-1'/>Personas and Scenarios</p>
                    <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill size="16" className='pr-1'/>Figma Prototyping</p>
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

export default starlamp

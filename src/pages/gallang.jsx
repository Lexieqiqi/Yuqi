import React from 'react'
import Image from 'next/image'
import gallangImg from "../../public/projects/gallang.png"
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const gallang = () => {
  return (
    <main>
      <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
          <div className='relative z-10' style={{ height: '100%', width: '100%' }}>
            <Image className='absolute object-contain' fill src={gallangImg} alt='Gallang Image' />
            <div className='absolute top-0 left-0 w-full h-full bg-black/70 z-20'></div>
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-30 p-2'>
              <h2>Gallang</h2>
              <h3>React / javascript / Firebase</h3>
            </div>
          </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 grid-rows-4 gap-8 pt-8 '>
          <div className='col-span-4 row-span-4 min-h-0'>
            <p>Project</p>
            <h2 className='pb-4'>Overview</h2>
            <h4 className='p-3 pl-0'>Motivation</h4>
            <p>Designers often create mood-boards, for example using Pinterest or Miro, to explore the design space. The images provided by these resources are often inconsistent in quality and the recommendation engines hinder, to some degree, truly imaginative and free inspiration. A digital mood-board bringing together several different sources of high-quality media, for example, stock photography, art galleries, fonts, etc. could lead to more effective exploration of the design space.</p>
            <h3 className='p-3 pl-0'>Results</h3>
            <p>In its current iteration, Gallang offers users the option to browse through and search for images from a reputable source, the Cooper Hewitt (Smithsonian Art Museum). The user can like and save those images into collections (called "Galleries"). Based on the individual usage behavior (i.e. the user's likes), Gallang computes and displays recommendations for similar artists, institutions, media or types that the user might also be interested in. When users want to continue their work in other design tools like Figma, they can download the images to their local machine for further use. This way, Gallang offers users a way to be inspired and to collect high-quality mood boarding assets for their design projects.</p>
            <h3 className='p-4 pl-0'>Features</h3>
            <ul class="mb-8 space-y-4 text-left text-gray-500 dark:text-gray-400">
                <li class="flex items-center space-x-3">
                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    <span>User authentication</span>
                </li>
                <li class="flex items-center space-x-3">
                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    <span>Persisted application state</span>
                </li>
                <li class="flex items-center space-x-3">
                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    <span><span class="font-semibold text-gray-900 dark:text-white">Basic recommendation engine</span> for suggested images based on user likes</span>
                </li>
                <li class="flex items-center space-x-3">
                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    <span>View and download liked images</span>
                </li>
                <li class="flex items-center space-x-3">
                    <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    <span><span class="font-semibold text-gray-900 dark:text-white">Drag-and-drop</span> images to add to galleries</span>
                </li>
            </ul>

            <a href='https://github.com/christophajohns/gallang'>
                <button className='px-8 py-2 mt-4'>Code</button>
            </a>
          </div>
          <div className='col-span-4 md:col-span-1 row-span-2 min-h-0 shadow-xl shadow-gray-400 rounded-xl p-4 '>
            <div className='p-2 '>
                <p className='text-center font-bold pb-2'>Technologies</p>
                <div className='grid grid-cols-3 md:grid-cols-1'>
                    <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>React</p>
                    <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Firebase</p>
                    <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Javascript</p>
                    <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Cooper Hewitt API</p>
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

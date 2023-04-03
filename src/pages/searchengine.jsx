import React from 'react'
import searchengineImg from "../../public/projects/searchEngine.png"
import Image from 'next/image'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const searchengine = () => {
  return (
    <main>
      <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
          <div className='relative z-10' style={{ height: '100%', width: '100%' }}>
            <Image className='absolute' fill style={{ objectFit: 'contain'}} src={searchengineImg} alt='Search Engine Image' />
            <div className='absolute top-0 left-0 w-full h-full bg-black/70 z-20'></div>
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-30 p-2'>
              <h2>Search Engine/Elastic Search</h2>
              <h3>Java / Elastic Search / Information Retrival System</h3>
            </div>
          </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
          <div className='col-span-4'>
            <p>Project</p>
            <h2>Overview</h2>
            <p>This is a search engine project. By creating user profiles with implicit feedback (history of visited URLS) it is possible to personalize search results for users. And once a multitude of such profiles are stored in the search engine it is possible to use a collaborative filtering algorithm that calculates the similarity between items using users’ interactions with those items. By calculating similarity between items the system can then recommend related items once a user has clicked on an item. It was found that by representing a user in document space by only looking at the user’s 10 latest visited URLS it is possible to re order the search results in a way that leads to more relevant documents (for the user) appearing at the top of the results. Furthermore, a qualitative analysis showed that for popular items, the related items that were recommended by the system were found relevant.
</p>
            <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
            <button className='px-8 py-2 mt-4'>Code</button>
          </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>React</p>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Elastic Search</p>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/>Java</p>
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

export default searchengine

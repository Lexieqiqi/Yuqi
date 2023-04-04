import React from 'react'
import Image from 'next/image'
import gallangImg from '@images/projects/gallang.png'
import furhatImg from '@images/projects/furhat.png'
import starlampImg from '@images/projects/starlamp.png'
import searchengineImg from '@images/projects/searchengine.png'
import Link from 'next/link'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id='projects' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
            <h2 className='py-4'>What I've built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
                <ProjectItem title='SearchEngine' backgroundImg={searchengineImg} projectUrl='/searchengine' />
                <ProjectItem title='Gallang' backgroundImg={gallangImg} projectUrl='/gallang' />
                <ProjectItem title='Furhat' backgroundImg={furhatImg} projectUrl='/furhat' />
                <ProjectItem title='StarLamp' backgroundImg={starlampImg} projectUrl='/starlamp' />
            </div>
        </div>
    </div>
  )
}

export default Projects
import React from 'react'
import Image from 'next/image'
import PythonImg from '@images/Python-logo-notext.svg.png'
import ReactImg from '@images/React-icon.svg.png'
import TailwindImg from '@images/Tailwind_CSS_Logo.svg.png'
import NextImg from '@images/1280px-Nextjs-logo.svg.png'
import ElasticSearchImg from '@images/elasticsearch_logo.png'
import JavaImg from '@images/java_logo.png'
import FlaskImg from '@images/flask.png'
import DjangoImg from '@images/django_logo.png'

const Skills = () => {
    return (
        <div id="skills" className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'> Skills</p>
                <h2 className='py-4'>What I can do</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={PythonImg} width='64' height='64' alt='' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Python</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={JavaImg} width='' height='64' alt='' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Java</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={ReactImg} width='' height='64' alt='' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>React</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 pl-4 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={NextImg} width='100' height='64' alt='' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Nextjs</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={TailwindImg} width='64' height='64' alt='' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Tailwind</h3>
                            </div>
                        </div>
                    </div>


                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={ElasticSearchImg} width='64' height='64' alt='' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Elasticsearch</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={FlaskImg} width='64' height='64' alt='' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Flask</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={DjangoImg} width='64' height='64' alt='' />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Django</h3>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Skills
import Main from '@component/Main'
import About from '@component/About'
import Skills from '@component/Skills'
import Projects from '@component/Projects'
import Contact from '@component/Contact'
import Navbar from '@component/Navbar'
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Home() {     
  const sectionRef = useRef(null); 

  return (
    <div className='relative h-screen'>
        <Navbar />
        <video className="fixed z-1 opacity-60 top-0 left-0 w-full h-full object-cover" autoPlay muted loop>
            <source src="/sunrise.mp4" type="video/mp4" />
        </video>
      <div className='fixed top-20 w-full h-full overflow-y-auto' >
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9 }}>
        <Main />
    </motion.div>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

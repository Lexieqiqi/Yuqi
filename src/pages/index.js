import Main from '@component/Main'
import About from '@component/About'
import Skills from '@component/Skills'
import Projects from '@component/Projects'
import Contact from '@component/Contact'
import Navbar from '@component/Navbar'
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

export default function Home() {     
  return (
    <div>
        <video className="fixed z-0 opacity-60 top-0 left-0 w-full h-full object-cover" autoPlay muted loop>
            <source src='Yuqi/sunrise.mp4' type="video/mp4" /> 
        </video>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9 }}>
    <div className="fixed top-20 w-full h-full overflow-y-auto">
        <Main />
        <About />
        <Skills />
        <Projects />
        <Contact />
    </div>
    </motion.div>
    </div>
  )
}

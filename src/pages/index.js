import Main from '@component/Main'
import About from '@component/About'
import Skills from '@component/Skills'
import Projects from '@component/Projects'
import Contact from '@component/Contact'
import gallangImg from "@images/gallang.png"

export default function Home() {
      
  return (
    <main>
      <div>
        <Main />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  )
}

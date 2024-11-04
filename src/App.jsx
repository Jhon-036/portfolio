import { FiGithub } from 'react-icons/fi'
import './App.css'
import NavBar from './components/NavBar'
import { TbBrandLinkedin } from 'react-icons/tb'
import { FaInstagram } from 'react-icons/fa6'
import Contact from './components/Contact'
import { useState } from 'react'

function App() {

  const [setshowModal, setSetshowModal] = useState(true)

  const handleShowModal = () => {
    setSetshowModal(!setshowModal)
    console.log(setshowModal);
  }

  return (
    <main className='bg-dark-blue relative'>
      <header className='border-b border-gray-800 fixed top-0 bg-dark-blue w-full z-10'>
        <div className='max-w-[88%] m-auto'>
          <NavBar />
        </div>
      </header>
      <article className='text-white max-w-[88%] m-auto'>
        {/* HERO */}
        <section className='flex flex-col items-center justify-center gap-16 h-screen'>
          <div className='leading-8 text-center'>
            <h2 className='text-4xl font-medium'>Hola, soy Jhon Huaman</h2>
            <span className='text-[18px] text-light-sky-blue font-medium'>Desarrollador Full Stack</span>
          </div>
          <img src="/gif/home__astronaut.gif" alt="home__astronaut" className='w-48 animate-float'/>
          <div className='flex gap-5'>
          <button onClick={handleShowModal} className="text-[15px] w-[8rem] h-9 rounded-[1.4rem] p-1 bg-light-blue">Contactame</button>
          <button className="text-[15px] w-[8rem] h-9 rounded-[1.4rem] p-1 border-2 border-light-blue text-light-blue">
            <a href="/cv/CV__JHON__HUAMAN.pdf" download={`CV JHON HUAMAN.pdf`}>Descargar CV</a>
          </button>
          </div>
          <div className={`absolute w-full h-screen z-20 flex justify-center items-center bg-opacity ${setshowModal ? 'animate-modalOpen hidden' : 'animate-modalClose'}`}>
            <Contact handleShowModal={handleShowModal}/>
          </div>
        </section> 
        {/* ABOUTME */}
        <section className='flex flex-col gap-14 py-10'>
          <div className='flex flex-col gap-5'>
            <h2 className='text-3xl font-medium'>Sobre mi</h2>
            <p>Desarrollador web con sólidos conocimientos, apasionado por crear experiencias web interactivas y atractivas. Especializado en frameworks modernos como React, Astro y Tailwind CSS. Además, poseo experiencia en la gestión de bases de datos utilizando SQL Server, PostgreSQL y MySQL.</p>
          </div>
          <div className='flex justify-center'>
            <img src="/gif/aboutMe__astronaut.gif" alt="aboutMe__astronaut" className='w-48'/>
          </div>
          <div className="text-2xl flex flex-wrap justify-center gap-6">
            <a 
              href="https://github.com/Jhon-036"
              className="flex justify-center items-center gap-3 p-1" target="_blank" rel="noopenenoreferrer">
                <FiGithub className="w-8 h-8 rounded-[50%] bg-light-blue p-[6px]"/>
                <p className="text-[17px] font-medium">GitHub</p>
            </a>
            <a 
              href="https://linkedin.com/in/jhon-huaman-734a05288"
              className="flex justify-center items-center gap-3 p-1" target="_blank" rel="noopenenoreferrer">
                <TbBrandLinkedin className="w-8 h-8 rounded-[50%] bg-light-blue p-[6px]"/>
                <p className="text-[17px] font-medium">Linkedin</p>
            </a>
            <a 
              href="https://www.instagram.com/jhon.036/"
              className="flex justify-center items-center gap-3 p-1" target="_blank" rel="noopenenoreferrer">
                <FaInstagram className="w-8 h-8 rounded-[50%] bg-light-blue p-[6px]"/>
                <p className="text-[17px] font-medium">Instagram</p>
            </a>
            </div>
        </section>
      </article>
    </main>
  )
}

export default App

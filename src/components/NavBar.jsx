import { useState } from "react"
import { FaBars, FaXmark } from "react-icons/fa6"
import { WiDaySunny } from "react-icons/wi"

const NavBar = () => {

    const [navBurger, setNavBurger] = useState(true)

    const handleNavBar = () => {
        setNavBurger(!navBurger)
        // console.log(navBurger);
    } 

    return (
        <section className="text-white flex justify-between items-center h-16">
            <button onClick={handleNavBar} className="p-1"><FaBars className="text-xl" /></button>
            <a href="#">
                <p className="text-xl p-1">Jhon.Dev</p>
            </a>
            <button><WiDaySunny className="text-3xl" /></button>
                <div className={`flex flex-col absolute top-0 -left-full h-screen bg-dark-blue w-full ${navBurger ? 'animate-close hidden' : 'animate-open'}`}>
                    <div className="h-16 flex justify-between items-center px-5 border-b border-gray-800">
                        <a href="#" className="p-1"><p className="text-xl">Jhon.Dev</p></a>
                        <button onClick={handleNavBar} className="p-1"><FaXmark className="text-xl" /></button>
                    </div>
                    <ul className="w-full flex flex-col">
                        <li className="h-16 flex items-center justify-center border-b border-gray-800">
                            <a href="#">Inicio</a>
                        </li>
                        <li className="h-16 flex items-center justify-center border-b border-gray-800">
                            <a href="#">Sobre mi</a>
                        </li>
                        <li className="h-16 flex items-center justify-center border-b border-gray-800">
                            <a href="#">Proyectos</a>
                        </li>
                        <li className="h-16 flex items-center justify-center border-b border-gray-800">
                            <a href="#">Testimodios</a>
                        </li>
                        <li className="h-16 flex items-center justify-center border-b border-gray-800">
                            <a href="#">Contactame</a>
                        </li>
                    </ul>
                    <div className="h-16 px-5 flex items-end">
                        <p>© 2024. Made for hobby | Jhon David</p>
                    </div>
                </div>
        </section>
    )
}
export default NavBar
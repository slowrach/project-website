import { Outlet } from "react-router"
import { useState } from "react"
import openMenu from "../assets/menu.svg"
import closeMenu from "../assets/close-menu.svg"
import footer from "../assets/footer.svg"
import { Nav } from "./Nav"

export function Layout(){
   const [showMenu, setShowMenu] = useState(false)
   const icon = showMenu ? closeMenu : openMenu

   const menu = () => {
      if (showMenu) {
         setShowMenu(false)
      } else {
         setShowMenu(true)
      }
   }

   const date = new Date()
   const year = date.getFullYear()
   
   return (
      <div className="bg-green-100">
        <header className="bg-[url(assets/header.png)] bg-no-repeat bg-cover text-white flex flex-col text-shadow-black text-shadow-lg">
           <h1 className="mt-10 text-[28px] md:text-3xl text-center ">Site Guadalupano</h1>

           <p className="w-90 text-center mt-3 mb-6 text-md md:text-[20px] leading-6 m-auto text-white">Inspirada por São Carlo Acutis, e por meio de sua intercessão, faço este pequeno website como prova de meu amor à minha Doce Mãe e como forma de difundir a história de sua aparição</p>

           <Nav className="hidden md:flex lg:mt-10" />

        </header>

        <button className="md:hidden w-full flex justify-center py-2 bg-green-600 border-t border-shadow" onClick={menu}>
               <img src={icon} alt="ícone de menu"/>
         </button>

         {showMenu && <Nav className="w-full bg-green-600 text-white flex-col absolute" />}

        <Outlet />

         <footer className="flex flex-col bg-green-600 pt-6 pb-3 text-white">
            <div className="flex justify-center items-center mb-3 md:mb-0">
               <img src={footer} alt="ilustração de flor" className="w-5 mr-1" />

               <p className="text-[25px] text-center">
                  ¡Viva la Virgen de Guadalupe!
               </p>

               <img src={footer} alt="ilustração de flor" className="w-5 ml-2" />
            </div>

            <div className="flex justify-between px-3">
               <span className="text-gray-400 text-xs">Baseado em um projeto do <a href="https://www.cursoemvideo.com/" target="_blank" className="hover:text-white">CursoemVideo</a></span>

               <span className="text-gray-400  text-xs">{year}</span>
            </div>
         </footer>
    </div>
   )
}
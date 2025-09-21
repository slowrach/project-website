import { Outlet } from "react-router"
import { useState } from "react"
import openMenu from "../assets/menu.svg"
import closeMenu from "../assets/close-menu.svg"
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

   return (
      <div>
        <header className="bg-linear-to-t from-green-500 to-green-300 text-white flex flex-col items-center pb-4 text-shadow-shadow text-shadow-md">
           <h1 className="uppercase mt-10 text-2xl">Site Guadalupano</h1>

           <p className="w-90 text-justify my-6 text-sm">Inspirada por São Carlo Acutis, e por meio de sua intercessão, faço este pequeno website como prova de meu amor à minha Doce Mãe e como forma de difundir a história de sua aparição</p>

           <button className="md:hidden" onClick={menu}>
               <img src={icon} alt="ícone de menu"/>
            </button>

           {showMenu && <Nav />}

           <Nav className="hidden md:block" />

        </header>

        <Outlet />

         <footer>
            <p>Site idealizado pelo <strong>Curso em Vídeo</strong> e desenvolvido pela autora.</p>
         </footer>
    </div>
   )
}
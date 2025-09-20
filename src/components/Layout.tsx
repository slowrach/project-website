import { Outlet } from "react-router"
import { useState } from "react"

export function Layout(){
   const [show, setShow] = useState(false)

   return (
      <div>
        <header className="bg-linear-to-t from-green-500 to-green-300 text-white flex flex-col items-center py-4 text-shadow-shadow text-shadow-md">
           <h1 className="uppercase">Site Guadalupano</h1>

           <p className="max-w-118 text-justify my-6">Bem-vindo ao nosso site! Aqui você encontra tudo sobre a história da aparição de Nossa Senhora de Guadalupe. Além disso, temos curiosidades sobre a imagem, orações e muito mais</p>

           <nav>
               <a href="/">Home</a>
               <a href="/noticias">Notícias</a>
               <a href="/curiosidades">Curiosidades</a>
               <a href="/video">Video</a>
               <a href="/fale-conosco">Fale Conosco</a>
           </nav>

           <button className="menu" onClick={() => setShow(!show)}><img src="src/assets/menu.svg" alt="ícone de menu"/></button>

           {show && <nav className="mobileMenu">
               <a href="/">Home</a>
               <a href="/noticias">Notícias</a>
               <a href="/curiosidades">Curiosidades</a>
               <a href="/video">Video</a>
               <a href="/fale-conosco">Fale Conosco</a>
           </nav>}         
        </header>

        <Outlet />

         <footer>
            <p>Site idealizado pelo <strong>Curso em Vídeo</strong> e desenvolvido pela autora.</p>
         </footer>
    </div>
   )
}
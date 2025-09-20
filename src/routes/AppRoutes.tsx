import { Route, Routes, BrowserRouter } from "react-router"
import { Layout } from "../components/Layout"
import { Home } from "../pages/Home"
import { Noticias } from "../pages/noticias"
import { Curiosidades } from "../pages/curiosidades"
import { Video } from "../pages/video"
import { Contato } from "../pages/Simbols"
import { NotFound } from "../pages/notFound"

export function AppRoutes(){
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Layout />}>
               <Route path="/" index element={<Home />} />

               <Route path="/noticias" element={<Noticias />} />

               <Route path="/curiosidades" element={<Curiosidades />} />

               <Route path="/video" element={<Video />} />

               <Route path="/fale-conosco" element={<Contato />} />
            </Route>

            <Route path="*" element={<NotFound />} />
         </Routes>
      </BrowserRouter>
   )
}
import { Route, Routes, BrowserRouter } from "react-router"
import { Layout } from "../components/Layout"
import { Home } from "../pages/Home"
import { Simbols } from "../pages/Simbols"
import { Prayers } from "../pages/Prayers"
import { More } from "../pages/More"
import { NotFound } from "../pages/NotFound"


export function AppRoutes(){
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Layout />}>
               <Route path="/" index element={<Home />} />

               <Route path="/simbolos" element={<Simbols />} />

               <Route path="/oracoes" element={<Prayers />} />

               <Route path="/mais" element={<More />} />
            </Route>

            <Route path="*" element={<NotFound />} />
         </Routes>
      </BrowserRouter>
   )
}
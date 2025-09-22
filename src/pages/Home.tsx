import home from "../assets/home.jpg"

export function Home(){
   return (
      <div className="main">
         <img src={home} alt="imagem de Nossa Senhora de Guadalupe"/>

         <p className="my-4">Nossa Senhora de Guadalupe, ou Virgem de Guadalupe, é um título mariano que surgiu em 1531, no México, quando Nossa Senhora apareceu ao índio asteca São Juan Diego.</p>

         <h2>História da aparição</h2>

         <p>Provavelmente você sabe que o sistema operacional <strong>Android</strong>, matido pelo <strong>Google</strong> é um dos mais utilizados para dispositivos móveis em todo o mundo. Mas talvez você não saiba que o seu simpático mascote tem um nome e uma história muito curiosa? Pois acompanhe esse artigo para aprender muita coisa sobre esse robozinho.</p>

         <img src="src/assets/home.png" alt="ilustração do mascote do android" className="imgHome"></img>
      </div>
   )
}
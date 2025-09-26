import pdf from "../assets/pdf.png"
import file from "../assets/Pequeno Devocionário Guadalupano.pdf"

export function Prayers
(){
   return (
      <div className="main">
         <div className="image">
            <img src={pdf} alt="Imagem ilustrativa do documento" className="md:w-140 m-auto"></img>
         </div>

         <p>Aqui você encontra o <span className="font-bold text-green-500">“Pequeno Devocionário Guadalupano”</span>, um documento cheio de orações dedicadas a Nossa Senhora de Guadalupe, traduzida pelo <strong>Brasil Guadalupano</strong> para português-BR, contendo orações cotidianas, orações populares, novena, modelos do Rosário e muito mais.</p>

         <span className="italic text-gray-500 block">Este documento está disponível clicando no botão abaixo: </span>

         <a href={file} download="pequeno-devocionario-guadalupano.pdf" className="buttons">Baixar PDF</a>
      </div>
   )
}
import pdf from "../assets/pdf.png";
import file from "../assets/Pequeno Devocionário Guadalupano.pdf";

export function Prayers() {
  return (
    <main>
      <h2>Oferta do dia</h2>

      <p className="prayer text-[20px]">Minha Senhora e minha Rainha, a quem tantos de vossos
        filhos chamam de Guadalupe. Peço que transformes minha mente, para que
        eu possa oferecer-te Bons pensamentos; que transformes meu coração, para
        que eu possa oferecer-te bons sentimentos; que transformes os meus lábios, para que eu possa anunciar o Vosso Filho; e que transformes minhas mãos, para que minhas obras sejam dignas de seu amor. Fazendo-me
        participar da simplicidade e do carinho com que vos serviu o mais pequeno dos vossos filhos, o índio São Juan Diego, Vosso mensageiro e enviado, cuja disponibilidade gostaria de vos oferecer com o meu
        serviço. Amém!</p>

      <h2>Oração antes de dormir</h2>

      <p className="prayer text-[20px]">Minha Senhora e minha Rainha, Santíssima Virgem de Guadalupe. Agora que o sol se pôs e o Céu se enche com as estrelas do vosso manto, confio meu descanso às vossas mãos. Apresento diante do nosso Deus o firme propósito de fazer amanhã, o que não fiz hoje ou que poderia fazer melhor. Tira da minha vida o quanto este dia separou-me do seu amor, e o firme propósito de ir ao Sacramento da Confissão para apagar minhas manchas e pecados, sabendo, Minha Senhora, que nada mais os entristece. Sabendo também, Minha Senhora, que nada mais vos alegra do que as boas obras dos vossos filhos, dando sentido a vinda do Senhor no vosso puríssimo ventre. Boa noite, Minha Senhora, Boa e Protetora Mãe, a quem chamamos Guadalupe, a quem se unem o céu e a terra pelas mãos de um anjo do mesmo Deus verdadeiro por quem se vive. Amém!</p>

      <div className="bg-green-50 pt-1 pb-8 px-3 rounded-md">
         <p>
           Essas e outras orações você encontra no{" "}
           <span className="font-bold text-green-500">
             “Pequeno Devocionário Guadalupano”
           </span>
           , um documento cheio de orações dedicadas a Nossa Senhora de Guadalupe,
           traduzida pelo <strong>Brasil Guadalupano</strong> para português-BR,
           contendo orações cotidianas, orações populares, novena, modelos do
           Rosário e muito mais.
         </p>

         <div className="image">
           <img
             src={pdf}
             alt="Imagem ilustrativa do documento"
             className="md:w-140 m-auto"
           ></img>
         </div>

         <span className="italic text-gray-500 block mt-5 text-center">
           O documento completo está disponível clicando no botão abaixo:
         </span>

         <a
           href={file}
           download="pequeno-devocionario-guadalupano.pdf"
           className="buttons"
         >
           Baixar PDF
         </a>
      </div>
    </main>
  );
}

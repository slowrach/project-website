import pdf from "../assets/pdf.png";
import file from "../assets/oracoes-guadalupanas.pdf";

export function Prayers() {
  return (
    <main>
      <h2>Oração de confiança à Nossa Senhora de Guadalupe</h2>

      <p className="prayer text-[20px]">
        Ó Mãe Santíssima de Guadalupe, estrela que ilumina nossos caminhos e
        abraço que consola nossas dores, acolhei-nos sob vosso manto de amor.
        Quando nos faltar a esperança, ensinai-nos a confiar; quando o medo nos
        cercar, fortalecei nossa fé; e quando as dificuldades parecerem maiores
        que nossas forças, recordai-nos que nunca estamos sozinhos, pois Deus
        caminha conosco. Mãe querida, apresentai ao vosso Filho Jesus nossas
        súplicas, nossas lágrimas silenciosas e os sonhos que guardamos no
        coração. Visitai nossos lares, protegei nossas famílias, amparai os
        enfermos e levai conforto aos que sofrem. Que vossa presença maternal
        nos ensine a amar sem medidas, perdoar com humildade e servir com
        generosidade. Nossa Senhora de Guadalupe, conduzi-nos sempre a Jesus,
        para que nossas palavras transmitam paz, nossas atitudes revelem bondade
        e nossa vida seja testemunho do amor de Deus. Não permitais que percamos
        a fé diante das provações, mas ajudai-nos a permanecer firmes,
        confiantes e perseverantes até o fim. Ó doce Mãe de Guadalupe, caminhai
        conosco hoje e sempre, e levai-nos pela mão ao encontro de vosso Filho,
        nosso Senhor e Salvador. Amém.
      </p>

      <h2>Oração pelas famílias à Nossa Senhora de Guadalupe</h2>

      <p className="prayer text-[20px]">
        Ó Maria de Guadalupe, Rainha das famílias e Mãe de todos os que confiam
        em vós, colocamos diante de vosso coração maternal os nossos lares,
        nossos filhos, nossos pais e todos aqueles que amamos. Entrai em nossas
        casas com vossa presença de paz e ajudai-nos a construir famílias
        firmadas no respeito, na fé e no perdão. Onde houver mágoas, semeai a
        reconciliação; onde houver palavras duras, fazei nascer a compreensão;
        onde houver afastamento, despertai novamente o desejo de amar. Protegei
        nossas crianças, orientai nossos jovens e sustentai os idosos, para que
        ninguém se sinta esquecido ou abandonado. Mãe Santíssima, ensinai-nos
        que a verdadeira riqueza de uma família não está nos bens que possui,
        mas no amor que partilha, na fé que testemunha e na união que preserva
        diante das dificuldades. Que nossas mesas sejam lugares de partilha,
        nossas palavras transmitam carinho e nossas atitudes revelem a presença
        de Cristo. Sob vosso manto consagramos nossas famílias. Guardai-nos de
        todo mal e conduzi-nos juntos à casa do Pai, onde o amor jamais terá
        fim. Amém.
      </p>

      <div className="bg-green-50 pt-1 pb-8 px-3 rounded-md">
        <p>
          Essas e outras orações você encontra no{" "}
          <span className="font-bold text-green-500">
            “Orações Guadalupanas”
          </span>
          , um documento cheio de orações dedicadas a Nossa Senhora de
          Guadalupe, contendo orações cotidianas, oração pelas famílias, consagração à Nossa Senhora de Guadalupe, ladainha e muito mais.
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
          download="oracoes-guadalupanas.pdf"
          className="buttons"
        >
          Baixar PDF
        </a>
      </div>
    </main>
  );
}

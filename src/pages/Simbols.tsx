import image from "../assets/image.jpg";
import eyes from "../assets/eyes.jpg";
import link from "../assets/link.svg";
import { useState } from "react";

export function Simbols() {
  const wXs = 320;
  const hXs = 180;

  const wMd = 590;
  const hMd = 332;

  const wLg = 800;
  const hLg = 432;

  let width: number 
  let height: number

  const [sizeScreen, setSizeScreen] = useState(window.innerWidth);

  function resizeWindow() {
    setSizeScreen(window.innerWidth);
  }

  window.addEventListener("resize", resizeWindow);

  if (sizeScreen < 820) {
    width = wXs
    height = hXs
  } else if (sizeScreen >= 820 && sizeScreen < 1240) {
    width = wMd
    height = hMd
  } else {
    width = wLg
    height = hLg
  }

  return (
    <div className="main">
      <p>
        A aparição da imagem de Nossa Senhora de Guadalupe, no manto, não é
        admirável apenas pelo milagre mas, também, porque trouxe consigo vários
        sinais e significados. Aqui você confere todos eles:
      </p>

      <div className="image md:w-100 m-auto">
        <img src={image} alt="Imagem original de Nossa Senhora de Guadalupe" />

        <span>fonte: Templário de Maria</span>
      </div>

      <ul className="bg-green-50 p-4 list-inside list-disc mt-4 rounded-lg">
        <li>
          <strong className=" uppercase"> Estrelas: </strong>
          As estrelas no manto de Nossa Senhora representam as principais
          constelações visíveis da cidade do México, no dia da aparição, também
          indicando que ela veio do Céu
        </li>

        <li>
          <strong className=" uppercase"> Cinto: </strong>
          Nossa Senhora aparece com um cinto para mostrar de que ela está
          grávida, indicando que esta é, verdadeiramente, a Mãe de Deus
        </li>

        <li>
          <strong className=" uppercase"> Flor de quatro pétalas: </strong>
          Abaixo da cintura, é possível ver uma flor de quatro pétalas. Esta
          flor é Nahui-Hollín, de grande importância para os indígenas, sobre o
          universo. Também representa a colina de Tepeyac, onde se deu a
          aparição.
        </li>

        <li>
          <strong className="uppercase">Cabelo solto: </strong>
          Este detalhe representava, para os astecas, sinal de virgindade,
          indicando que Nossa Senhora é a Virgem Maria
        </li>

        <li>
          <strong className="uppercase">Rosto: </strong>
          Nossa Senhora apareceu com traços mestiços e pele morena, como o povo
          da região e para representar que é a Mãe das Américas
        </li>
      </ul>

      <p>
        Além de todos os simbolismos presentes, a imagem carrega outro grande
        milagre: ao aplicarem um zoom, foi possível identificar, nos olhos de
        Nossa Senhora, toda a cena do momento em que o manto foi revelado.
      </p>

      <div className="image lgImg">
        <img
          src={eyes}
          alt="Imagem do zoom nos olhos da figura de Nossa Senhora"
        />

        <span>Fonte: Minha Biblioteca Católica</span>
      </div>

      <p>
        E, por fim, outro grande mistério que o Manto de Nossa Senhora de
        Guadalupe carrega é a sua durabilidade ao longo de tantos anos. Nem
        mesmo um ácido sulfúrico, que acidentalmente caiu sobre ele, foi capaz
        de destruí-lo.
      </p>

      <h2>Curiosidades</h2>

      <p>
        Você sabia? Um estudioso, por meio de um dos simbolismos da imagem de
        Nossa Senhora de Guadalupe (as estrelas do seu Manto), identificou
        notas, pelas posições das estrelas, que foram capazes de construir uma
        melodia. Abaixo, temos um vídeo do canal{" "}
        <strong>Diario de Yucatán Megamedia</strong>, que contém a apresentação
        da música por trás do manto de Nossa Senhora de Guadalupe, interpretada
        pela orquestra de Vienna Music & Art Academy, comandada pelo maestro
        Luis Chan Sabido. Confira:
      </p>

      <div className="video">
        <iframe
          width={width}
          height={height}
          src="https://www.youtube.com/embed/5HCh3UBxr8g?si=Ws5FMqDfGsKgGCSy"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="m-auto mt-6"
        ></iframe>
      </div>

      <div className="ref">
        <h3>Referências</h3>

        <a
          href="https://bibliotecacatolica.com.br/blog/devocao/simbolismo-de-nossa-senhora-de-guadalupe/?srsltid=AfmBOoqM2TAitN5KVZZGqoOue5NqNRg4SHPg0l-7Uujhq75_WjtcQ2o6"
          target="_blank"
        >
          Artigo - Minha Biblioteca Católica
          <img src={link} alt="Ícone de link externo" />
        </a>

        <a
          href="https://www.arautos.org/virgem-maria/os-simbolos-da-imagem-de-nossa-senhora-de-guadalupe-203349"
          target="_blank"
        >
          Artigo - Arautos do Evangelho
          <img src={link} alt="Ícone de link externo" />
        </a>
      </div>
    </div>
  );
}

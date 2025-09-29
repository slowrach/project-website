import home from "../assets/home.jpg";
import imageMd from "../assets/guadalupe.jpg";
import imageLg from "../assets/guadalupe-lg.jpg";
import link from "../assets/link.svg";
import like from "../assets/like.svg";
import likedImg from "../assets/liked.png";
import dislike from "../assets/dislike.svg";
import dislikedImg from "../assets/disliked.png";

import { useState, useEffect } from "react";

export function Home() {
  const [likeNum, setLikeNum] = useState(Number(localStorage.getItem("likes")));
  const [dislikeNum, setDislikeNum] = useState(
    Number(localStorage.getItem("dislikes"))
  );
  const [liked, setLiked] = useState(false)
  const [disliked, setDisliked] = useState(false)

  const funcLike = () => {
    if (liked) {
      if (likeNum > 0) {
        setLikeNum(likeNum - 1)
      } else {
        setLikeNum(likeNum)
      }
    } else {
      setLikeNum(likeNum + 1)
    }

    setLiked(!liked)
  }

  const imgLike = liked ? likedImg : like

  const funcDislike = () => {
    if (disliked) {
      if (dislikeNum > 0) {
        setDislikeNum(dislikeNum - 1)
      } else {
        setDislikeNum(dislikeNum)
      }
    } else {
      setDislikeNum(dislikeNum + 1)
    }

    setDisliked(!disliked)
  }

  const imgDislike = disliked ? dislikedImg : dislike

  useEffect(() => {
    localStorage.setItem("likes", likeNum.toString());
    localStorage.setItem("dislikes", dislikeNum.toString());
  }, [likeNum, dislikeNum]);

  const [sizeScreen, setSizeScreen] = useState(window.innerWidth);

  function resizeWindow() {
    setSizeScreen(window.innerWidth);
  }

  window.addEventListener("resize", resizeWindow);

  const image = sizeScreen > 1200 ? imageLg : imageMd;

  return (
    <main>
      <div className="image lgImg">
        <img
          src={home}
          alt="imagem de Nossa Senhora de Guadalupe"
          className="shadowImg"
        />

        <span>fonte: Filho de Guadalupe</span>
      </div>

      <p className="font-bold">
        Nossa Senhora de Guadalupe, ou Virgem de Guadalupe, é um título mariano
        que surgiu em 1531, no México, quando Nossa Senhora apareceu ao índio
        asteca São Juan Diego.
      </p>

      <article>
        <h2>História da aparição</h2>

        <p>
          No ano de 1531, apesar do país ser tomado pelos cultos pregados pelos
          povos indígenas astecas, que cultuavam ao sol, a lua e as estrelas,
          missionários espanhóis espalharam seu apostolado e conseguiram
          converter muitos indígenas, dentre eles Juan Diego, o qual foi
          batizado, tornando-se um cristão piedoso e humilde.
        </p>

        <p>
          No dia 9 de dezembro deste mesmo ano, enquanto Juan estava a caminho
          da Santa Missa, passando pela colina de Tepeyac, ele ouviu uma linda
          voz que lhe chamava carinhosamente <strong>(1ª aparição)</strong>. A
          Virgem, então, após perguntar onde estava indo, fez-lhe o seguinte
          pedido: que ele fosse à casa do Bispo da Cidade do México, dizendo que
          fora enviado por ela e que esta desejava que fosse construída, ali, no
          local de sua aparição, um templo. Assim fez Juan Diego. Porém, o bispo
          não acreditou nas palavras daquele pobre indígena.
        </p>

        <p>
          Então, Juan voltou ao local da aparição e encontrou a Virgem,
          sentindo-se indigno de tal tarefa <strong>(2ª aparição)</strong>. A
          Virgem então lhe disse que ele foi escolhido por ela e que devia
          voltar, no outro dia, e fazer, novamente, o pedido ao bispo. Pela
          segunda vez, ele não aceitou e pediu que Juan comunicasse à Virgem que
          enviasse um sinal, para que ele acreditasse na aparição.
        </p>

        <div className="fix:flex gap-7 items-center">
          <div className="fix:w-110">
            <p>
              Juan Diego voltou para casa, então, mais uma vez sem sucesso na
              sua missão. E, após esse dia, ele não foi se encontrar com a
              Virgem Mãe.
            </p>

            <p>
              Ele morava com seu tio, e este estava enfermo. Então Juan saiu em
              busca de um padre pois seu tio já estava à beira da morte.
            </p>

            <p>
              Mesmo assim, no caminho, a Virgem apareceu para ele
              <strong>(3ª aparição)</strong> e lhe disse sua famosa frase:
              <span className="italic text-green-500 bg-green-50 font-bold">
                “Não estou eu aqui que sou tua mãe? Tu não estás sob minha
                sombra e proteção?”
              </span>
              . Além disso, lhe confortou para que não se preocupasse com a
              enfermidade do tio, pois ele estava, agora, curado. Em seguida,
              pediu que ele colhesse rosas que estavam no topo da colina (mesmo
              que o clima da época não permitisse, ele encontrou lindas rosas) e
              as colocasse dentro do seu manto (ou tilma, como também é
              chamado).
            </p>
          </div>

          <div className="image">
            <img src={image} alt="figura da aparição de Nossa Senhora" className="lg:w-140" />

            <span>fonte: Associação Devotos de Fátima</span>
          </div>
        </div>

        <p>
          Assim fez Juan Diego, e foi encontrar, pela terceira vez, o bispo. Ao
          abrir o manto, milagrosamente surgiu a imagem de Nossa Senhora de
          Guadalupe, imprimida no tecido. Assim, o bispo acreditou naquele
          grandioso milagre e fez, então, o que a Senhora havia pedido e o
          templo foi construído.
        </p>

        <p>
          Dessa forma, a aparição e o milagre foram difundidos através dos anos,
          com aprovação da Igreja e, assim, nasceu a devoção a Nossa Senhora de
          Guadalupe, que, em 1910, foi proclamada padroeira das Américas, pelo
          papa São Pio X.
        </p>
      </article>

      <div className="likes mt-10">
        <span>Gostou do nosso artigo?</span>

        <div className="flex gap-4 mt-1">
          <div className="flex items-center gap-1">
            <button onClick={funcLike}>
              <img
                src={imgLike}
                alt="Ícone de curtir"
                className="hover:scale-120 hover:cursor-pointer"
              />
            </button>

            <span>{likeNum}</span>
          </div>

          <div className="flex items-center gap-1">
            <button onClick={funcDislike}>
              <img
                src={imgDislike}
                alt="Ícone de descurtir"
                className="hover:scale-120 hover:cursor-pointer"
              />
            </button>

            <span>{dislikeNum}</span>
          </div>
        </div>
      </div>

      <div className="ref">
        <h3>Referências</h3>

        <a
          href="https://bibliotecacatolica.com.br/blog/devocao/nossa-senhora-de-guadalupe/?srsltid=AfmBOoq4X-wa6h14PH0q4qjUYXucRV8CI1okH7QvHtFY__KS06Y6dWrB"
          target="_blank"
        >
          Artigo - Minha Biblioteca Católica
          <img src={link} alt="Ícone de link externo" />
        </a>
      </div>
    </main>
  );
}

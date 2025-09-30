import game from "../assets/game.jpg"

export function More() {
  return (
    <main>
      <p>
        Gostou do nosso site? Confira também o nosso jogo <strong>Adivinhe o Santo</strong>. O jogo consiste em uma dica e você tem 10 tentativas para descobrir de qual santo
        estamos falando, tentando advinhar cada letra do seu nome. Vem jogar!
      </p>

      <img src={game} alt="Logo do jogo" className="w-100 m-auto mb-8" />

      <a href="https://projeto-adivinhe.vercel.app/" target="_blank" className="buttons">Quero jogar</a>
    </main>
  );
}

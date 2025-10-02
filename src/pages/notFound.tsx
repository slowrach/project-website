import rose from "../assets/rose.svg";

export function NotFound() {
  return (
    <div className="bg-[url(assets/header.png)] bg-no-repeat bg-cover h-[100vh]">
      <main className="h-[90vh]">
        <h4 className="text-center text-8xl font-bold text-green-200 mt-20">
          404
        </h4>

        <h5 className="text-[24px] md:text-6xl text-green-200 mb-20 text-center">
          Página não encontrada!
        </h5>

        <a href="/" className="buttons">
          voltar
        </a>

        <div className="flex items-center justify-center mt-20">
          <img src={rose} alt="Ícone de rosa" className="w-5 md:w-10 mr-2" />

          <span className="text-xs md:text-lg text-green-500 font-bold">
            ¡Viva la Virgen de Guadalupe!
          </span>

          <img src={rose} alt="Ícone de rosa" className="w-5 md:w-10 ml-1" />
        </div>
      </main>
    </div>
  );
}

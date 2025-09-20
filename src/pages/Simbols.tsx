export function Contato(){
   return (
      <div className="main-contato">
         <h1>Entre em contato</h1>

         <form method="post">
            <div className="personal-data">
               <img src="src/assets/person.svg" alt="ícone de pessoa"></img>
               
               <input type="text" placeholder="Seu nome" required></input>
            </div>

            <div className="personal-data">
               <img src="src/assets/at.svg" alt="ícone do arroba"></img>

               <input type="email" placeholder="Email" required></input>
            </div>

            <div>
               <textarea id="message" placeholder="Digite sua mensagem aqui..."></textarea>
            </div>

            <button className="button" form="contact">
            Enviar mensagem
            </button>
         </form>
      </div>
   )
}
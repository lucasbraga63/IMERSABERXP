const header = document.querySelector('header')

function GerarMenu(){
    header.innerHTML = `
    
     <div class="logo">
            <img src="FrontEnd/assets/logo.png" alt="logo">
            <p>IMERSABER <span>XR</span></p>
        </div>

        <div class="links">
            <nav>
                <ul>
                    <li><a href="FrontEnd/Paginas/">EXPERIÊNCIAS</a></li>
                    <li><a href="FrontEnd/Paginas/">PROJETOS</a></li>
                    <li><a href="FrontEnd/Paginas/">CONTEÚDOS</a></li>
                    <li><a href="FrontEnd/Paginas/">SOLUÇÕES</a></li>
                    <li><a href="FrontEnd/Paginas/">SOBRE NÓS</a></li>
                    <li><a href="FrontEnd/Paginas/">NOTÍCIAS</a></li>
                </ul>
            </nav>
        </div>

        <div class="botoes">
         <button>CONTATE-NOS <img src="FrontEnd/assets/moveUpRigthIcon.png" alt="icon" id="icon"></button>
        </div>
    `
}

GerarMenu()
const livros = {
    1: {
        "titulo": "Javascript Eloquente",
        "quemEscreveu": "Marijn Haverbeke",
        "link": "https://github.com/braziljs/eloquente-javascript"
    },
    2: {
        "titulo": "Você não sabe JS",
        "quemEscreveu": "Kyle Simpson",
        "link": "https://github.com/cezaraugusto/You-Dont-Know-JS"
    },
    3: {
        "titulo": "Calibã e a Bruxa: mulheres, corpo e acumulação primitiva",
        "quemEscreveu": "Silvia Federici",
        "link": "http://coletivosycorax.org/wp-content/uploads/2019/09/CALIBA_E_A_BRUXA_WEB-1.pdf"
    }
}

const ul = document.getElementById("lista-do-catalogo")

for (let propriedade in livros){ // para cada propriedade em meu objeto:
    const li = document.createElement("li") // cria elemento <li>
    ul.appendChild(li) // linka filho na mãe
    li.classList.add("livro") // adiciona classe

    const tituloLivro = document.createElement("h2") // cria elemento <h2>
    li.appendChild(tituloLivro) // linka o filho na mãe 
    tituloLivro.textContent = livros[propriedade]["titulo"] //cria conteudo, chamando o objeto
    tituloLivro.classList.add("livro__titulo") // adiciona classe (e se repete nos passos abaixo)
   
    const nomeAutor = document.createElement("p")
    li.appendChild(nomeAutor)
    nomeAutor.textContent = livros[propriedade]["quemEscreveu"]
    nomeAutor.classList.add("livro__autoria")
    
    const linkLivro = document.createElement("a")
    li.appendChild(linkLivro)
    linkLivro.setAttribute("href", livros[propriedade]["link"])
    linkLivro.setAttribute("target", "_blank")
    linkLivro.textContent = "Leia aqui"
    linkLivro.classList.add("livro__link")

    const botao = document.createElement("button")
    li.appendChild(botao)
    botao.setAttribute("type", "submit")
    botao.textContent = "Já li"
    botao.classList.add("botao-lido")

    // TOGGLE
    botao.addEventListener("click", function(){
        if (tituloLivro.classList.contains("livro__titulo--lido")){
            tituloLivro.classList.remove("livro__titulo--lido")
            botao.classList.remove("botao-nao-lido")
            botao.textContent = "Já li"

        } else {
            tituloLivro.classList.add("livro__titulo--lido")
            botao.classList.add("botao-nao-lido")
            botao.textContent = "Desfazer"
        }
})
}

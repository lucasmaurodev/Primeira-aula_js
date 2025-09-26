const imagem = document.getElementById('imagemExemplo')
const link = document.getElementById('linkExemplo')
const botao = document.getElementById('botaoMudar')

let situacao = 1

function Primogenita()
{
    if(situacao == 1 )
    {
        imagem.src = "openai.png"
        imagem.alt = "Imagem open ia"
        link.href = "https://openai.com/pt-BR/"
        link.textContent = "Visitar IA"
        botao.textContent = "Mudar para IA"
        situacao = 2
    }
    else{
        imagem.src = "Google.png"
        imagem.alt = "Imagem Google"
        link.href = "https://www.google.com"
        link.textContent = "Visitar Google"
        botao.textContent = "Mudar para Google"
        situacao = 1


    }   
}

botao.addEventListener('click', Primogenita)

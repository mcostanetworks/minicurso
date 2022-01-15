const imagem = document.querySelector('img'); //Cria bloco para armazenar tag img do HTML.
const botao = document.querySelector('button');
const nomeDoPersonagem = document.querySelector('#nome');
const especie = document.querySelector('#especie');
const status = document.querySelector('#status');

pegarPersoangem = () => { //Arrow function
    return fetch(`https://rickandmortyapi.com/api/character/2`, {
        method:'GET',
        headers: {
            Accept:'application/json',
            "Content-type": 'application/json'
        } 
    }).then((response) => response.json()).then((data) => {
        imagem.src = data.image;
        imagem.alt = data.name;
    }); //A função then está ligada a fetch
}

botao.onclick = pegarPersonagem;
const form = document.querySelector("form");
const input = document.querySelectorAll(".campo");
let cardsArea = document.querySelector(".cards-area");
let buttonSubmit = document.querySelector(".submit-btn");
const spans = document.querySelectorAll("span");

function criaCard(campos) {
    let div = document.createElement("div");
    div.classList.add("card");

    let h3 = document.createElement("h3");
    h3.classList.add("personagem");
    h3.innerText = `${campos[0].value}`;

    let h4 = document.createElement("h4");
    h4.classList.add("card-titulo");
    h4.innerText = `${campos[1].value}`;

    let imagem = document.createElement("img");
    imagem.src = `${campos[2].value}`;
   
    let p = document.createElement("p");
    p.classList.add("descricao");
    p.innerText = `${campos[3].value}`;

    div.appendChild(imagem);
    div.appendChild(h3);
    div.appendChild(h4);
    div.appendChild(p);

    cardsArea.appendChild(div);
}
function chamaErro(){
    input[0].classList.add("erro");
    input[3].classList.add("erro");
    spans.forEach(span => {
        span.innerHTML = "Deve ter mais que 4 caracteres";
    })
}

function comeca(){
    let listaInputs = [input[0].value, input[1].value, input[2].value, input[3].value];
    if(listaInputs.indexOf('') !== -1 || listaInputs.indexOf(null) !== -1) {
        buttonSubmit.disabled = true;
    }else {
        buttonSubmit.disabled = false;  
    }
}
form.addEventListener("submit", (e) => {
    let listaInputs = [input[0].value, input[1].value, input[2].value, input[3].value];
    e.preventDefault();
    if(listaInputs[0].length < 4 || listaInputs[3].length < 4){
        chamaErro();
    }else {
        criaCard(input);
    }
})
input.forEach(campo =>{
    campo.addEventListener("keydown", comeca);
})

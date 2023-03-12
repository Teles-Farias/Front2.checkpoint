const form = document.querySelector("form");
const input = document.querySelectorAll(".campo");
let cardsArea = document.querySelector(".cards-area");

//titulo, personagem, img, descricao
function criaCard(campos) {
    let div = document.createElement("div");
    div.classList.add("card");

    let imagem = document.createElement("img");
    imagem.src = `${campos[2].value}`;

    let h3 = document.createElement("h3");
    h3.classList.add("personagem");
    h3.innerHTML = `${campos[0].value}`;

    let h4 = document.createElement("h4");
    h4.classList.add("card-titulo");
    h4.innerHTML = `${campos[1].value}`;

    let p = document.createElement("p");
    p.classList.add("descricao");
    p.innerHTML = `${campos[3].value}`;

    div.appendChild(imagem);
    div.appendChild(h3);
    div.appendChild(h4);
    div.appendChild(p);

    cardsArea.appendChild(div);
    return div;
}

 form.addEventListener("submit",(e)=>{
   e.preventDefault();
    let novaLista=[];
    input.forEach(campo=>{
        novaLista.push(campo.value)
    })    
     if (novaLista.indexOf('')!== -1 || novaLista.indexOf(null)!== -1){
        console.log('Você Não preencheu todos os campos')
    }else {
        if (novaLista[0].length<4 || novaLista[3].length<4){
            console.log('O campos preenchido não esta de acordo')
        }
    }   

})






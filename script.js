// Instruções para entrega
// # 1️⃣ Desafio Classificador de nível de Herói

// **O Que deve ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões

// ## Objetivo

// Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 5.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante

// ## Saída

// Ao final deve se exibir uma mensagem:
// "O Herói de nome **{nome}** está no nível de **{nivel}**"

 

const botaoVerificar = document.querySelector(".btn");
const descricao = document.querySelector(".descricao");
const elo = document.querySelector(".elo");
const imagem = document.querySelector(".imagem");

botaoVerificar.addEventListener("click", verificar);

function verificar() {
  descricao.innerHTML = "";
  elo.innerText = "";
  imagem.innerHTML = "";
  
  const heroi = document.querySelector("#heroi").value;
  const xp = Number(document.querySelector("#xp").value);

  if (heroi == "" || xp == "") {
    descricao.innerHTML = `<span style="color: red; text-transform: uppercase;">É necessário preencher os dois campos!</span>`;
  } else {
    if (xp <= 1000) {
      descricao.innerHTML = `O Herói de nome <strong>${heroi}</strong> está no nível de <strong>${xp}</strong>.`;
      elo.innerText = "Elo: Ferro";
      imagem.innerHTML = `<img src="img/ferro.webp" alt="">`;
    } else if (xp >= 1001 && xp <= 2000) {
      descricao.innerHTML = `O Herói de nome <strong>${heroi}</strong> está no nível de <strong>${xp}</strong>.`;
      elo.innerText = "Elo: Bronze";
      imagem.innerHTML = `<img src="img/bronze.jpg" alt="">`;
    } else if (xp >= 2001 && xp <= 5000) {
      descricao.innerHTML = `O Herói de nome <strong>${heroi}</strong> está no nível de <strong>${xp}</strong>.`;
      elo.innerText = "Elo: Prata";
      imagem.innerHTML = `<img src="img/prata.jpg" alt="">`;
    } else if (xp >= 5001 && xp <= 7000) {
      descricao.innerHTML = `O Herói de nome <strong>${heroi}</strong> está no nível de <strong>${xp}</strong>.`;
      elo.innerText = "Elo: Ouro";
      imagem.innerHTML = `<img src="img/ouro.png" alt="">`;
    } else if (xp >= 7001 && xp <= 8000) {
      descricao.innerHTML = `O Herói de nome <strong>${heroi}</strong> está no nível de <strong>${xp}</strong>.`;
      elo.innerText = "Elo: Platina";
      imagem.innerHTML = `<img src="img/platina.jpg" alt="">`;
    } else if (xp >= 8001 && xp <= 9000) {
      descricao.innerHTML = `O Herói de nome <strong>${heroi}</strong> está no nível de <strong>${xp}</strong>.`;
      elo.innerText = "Elo: Ascendente";
      imagem.innerHTML = `<img src="img/a.png" alt="">`;
    } else if (xp >= 9001 && xp <= 10000) {
      descricao.innerHTML = `O Herói de nome <strong>${heroi}</strong> está no nível de <strong>${xp}</strong>.`;
      elo.innerText = "Elo: Imortal";
      imagem.innerHTML = `<img src="img/imortal.webp" alt="">`;
    } else if (xp >= 10001) {
      descricao.innerHTML = `O Herói de nome <strong>${heroi}</strong> está no nível de <strong>${xp}</strong>.`;
      elo.innerText = "Elo: Radiante";
      imagem.innerHTML = `<img src="img/radiante.jpg" alt="">`;
    }
  }
}

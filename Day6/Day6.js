const lista = document.getElementById("lista");
const fruta = [];
const sobremesa = [];
const legume = [];
const congelado = [];
  
let pergunta = prompt("Você deseja adicionar algum alimento na sua lista, sim ou não?");

while(pergunta === "sim") {
  var alimento = prompt("Qual alimento?")
  var tipoComida = prompt("Em que tipo de alimento esse alimento se enquadra; fruta, sobremesa, congelado ou legume?");
  
  if (tipoComida == "fruta") {
  fruta.push(alimento);
  } else if (tipoComida == "sobremesa") {
  sobremesa.push(alimento);
  } else if (tipoComida == "legume") {
  legume.push(alimento);
  } else if (tipoComida == "congelado") {
  congelado.push(alimento);
  } else {
  alert("Eu não conheço esse tipo de comida.")
  }

  pergunta = prompt("Você deseja adicionar outro alimento, sim ou não?");

}

if (pergunta === "não") {
  lista.innerHTML = `<h1>Lista de Compras</h1>
  <br>
  <h2>Frutas:</h2> 
  <p>${fruta}</p>
  <br> 
  <h2>Sobremesas:</h2>
  <p>${sobremesa}</p>
  <br> 
  <h2>Congelados:</h2> <p>${congelado}</p>
  <br> 
  <h2>Legumes:</h2> 
  <p>${legume}</p>`;

}

function remover() {
  
}

console.log(alimento ,fruta);
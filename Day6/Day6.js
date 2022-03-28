const lista = document.getElementById("lista");
const fruta = [];
const sobremesa = [];
const legume = [];
const congelado = [];

function comprar() {
  let pergunta = prompt("Você quer adicionar ou remover um item?");

  if (pergunta === "adicionar") {
    adicionarItem();
  } else if (pergunta === "remover") {
    removerItem();
  } else {
    alert("Obrigado pela preferência");
  }
}

function adicionarItem() {

    while(true) {
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

    if (pergunta === "não") {
      alert("Obrigado volte sempre!");
      mostraListaNaTela();
      break;
    }
  }
}

function mostraListaNaTela() {
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

function removerItem() {
  while (true) {
    let tipoComida = prompt(
      "Qual o tipo de alimento que você deseja remover, fruta, sobremesa, congelado ou legume?)");

    let alimento = prompt("E qual alimento você deseja remover?");

    if (tipoComida === "fruta") {
      fruta.splice(fruta.indexOf(alimento), 1);
    }
    if (tipoComida === "sobremesa") {
      sobremesa.splice(sobremesa.indexOf(alimento), 1);
    }
    if (tipoComida === "congelado") {
      congelado.splice(congelado.indexOf(alimento), 1);
    }
    if (tipoComida === "legume") {
      legume.splice(legume.indexOf(alimento), 1);
    }

    alert("O alimento será removido.");

    let pergunta = prompt("Deseja remover outro item, sim ou não?");
    if (pergunta === "não") {
      alert("Obrigado pela preferência!");
      mostraListaNaTela();
      break;
    }
  }
}

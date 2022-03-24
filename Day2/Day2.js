var link = 'https://www.alura.com.br/cursos-online-programacao';
const nome = prompt("Qual seu nome?");
const idade = prompt("Quantos anos você tem?");
const linguagem = prompt("Qual linguagem estuda?");
const tempo = prompt(`Você estuda ${linguagem} há quantos anos?`);
const msg = `<h1>${nome}, tem ${idade} anos e estuda ${linguagem} há ${tempo} anos.</h1></br>`;
document.writeln(msg);

resposta = prompt(`Você gosta de estudar ${linguagem}? Responda com 1 para SIM ou 2 para NÃO.`);

if (resposta == 1) {
  const msg2 = `<p>Muito bem ${nome}, continue se esforçando estudando ${linguagem} e você terá um futuro brilhante.</p>`;
  document.writeln(msg2);
  console.log(msg2)
} else if (resposta == 2) {
  resposta2 = prompt("Ahh que pena... Já tentou aprender outras linguagens? Responda com 1 para SIM ou 2 para NÃO.");
} else {
  alert("Resposta inválida");
}

if(resposta2 == 1) {
  const msg3 = `<p>Infelizmente você não gosta de estudar ${linguagem}, porém está tentando achar uma linguagem que goste, continue assim, <a href="${link}">aqui uma sugestão de cursos de linguagens que vc pode se interessar.</a> Boa sorte!</p>`;
  document.writeln(msg3);
  console.log(msg3)
} else if (resposta2 == 2){
  const msg4 = `<p>Já que você não gosta de estudar ${linguagem}, <a href="${link}">fica aqui uma sugestão de cursos de linguagens que vc pode gostar. </a>Não desista!</p>`;
  document.writeln(msg4);
  console.log(msg4)
} else {
  alert("Resposta inválida");
}

let numero = parseInt(Math.random(0, 10) * 10);
console.log(numero);
var tentativas = 3;
var resultado = document.getElementById("resultado");

  do {
      var chute = prompt("Digite um número");
    if(chute == numero) {
        alert(`Parabéns você acertou o número era ${numero}`)
        break;
      } else {
        tentativas--;
        alert(`Você errou, lhe restam ${tentativas} tentativas`);
      }
    }  while(tentativas !== 0)
    document.write(`O número era ${numero}`);
    

let nome = prompt("Qual seu nome?");
let area = prompt(`${nome}, em qual área você deseja trabalhar, Front-end ou Back-end?`);
console.log(area);


if (area == "Front-end") {
  let msg2 = `<p>${nome} pretende trabalhar com ${area}, é uma área muito atrativa para iniciantes, é responsável principalmente pela aparência da aplicação,</p>`;
  document.write(msg2);
  let front = prompt("Qual linguagem pretende estudar, React ou Vue?");
  if (front == "React") {
    let msg3 = `<p>${nome} quer estudar a linguagem ${front}..., .</p>`;
    document.write(msg3);
  } else  if (front == "Vue") {
    let msg4 = `<p>quer estudar ${front}, .</p>`;
    document.write(msg4);
  } else {
    alert("Resposta inválida");
  }
} else {
  let msg5 = `<p>pretende trabalhar com ${area}, é uma área que pode trazer altos salários,</p>`;
  document.write(msg5);
  let back = prompt("Qual linguagem pretende estudar, C# ou Java?");
    if (back == "C#") {
    let msg6 = `<p>quer estudar a linguagem ${back}... .</p>`;
    document.write(msg6);
  } else if (back == "Java") {
  let msg7 = `<p>quer estudar a linguagem ${back}... .</p>`;
  document.write(msg7);
  } else {
    alert("Resposta inválida");
  }
}

let carreira = prompt(`${nome}, você vai se especializar em ${area}? Ou quer se tornar um Desenvolvedor Full-stack. Responda com 1 para ${area} ou 2 para Full-stack`);

if(carreira == 1) {
  let msg8 = `<p>Pretende se especializar na ${area}, então boa sorte se tornando um grande Desenvolvedor ${area}.</p>`;
  document.write(msg8);
  console.log(msg8)
} else if (carreira == 2) {
  let msg9 = `<p>Pretende se especializar como um Desenvolvedor Full-stack, então boa sorte se tornando um Desenvolvedor completo.</p>`;
  document.write(msg9);
} else {
  alert("Resposta inválida");
}

document.writeln(`Linguagens que ${nome} também deseja estudar:`);

do {
  resposta = prompt(`Você possui alguma outra linguagem que pretende estudar? Responda com Sim ou Não.`);
  if (resposta == "Sim") {
    let linguagens = prompt(`Então qual outra linguagem você gostaria de aprender?`);
    if (linguagens == "Ruby") {
      document.writeln(`<i class="fab fa-ruby"></i>`);
    } else if (linguagens == "PHP") {
      document.writeln(`<i class="fab fa-php"></i>`);
    } else {
      break;
    }
    console.log(linguagens);
  } else {
    document.writeln(`No momento nenhuma.`);
    break;
  }
}
while(resposta == "Sim");
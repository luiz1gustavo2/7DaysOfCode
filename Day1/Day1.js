let numeroUm = 1;
let stringUm = '1';
let numeroTrinta = 30;
let stringTrinta = '30';
let numeroDez = 10;
let stringDez = '10';

document.writeln(`numeroUm = ${numeroUm} é do tipo (${typeof(numeroUm)}) <br>`);
document.writeln(`stringUm = ${stringUm} é do tipo (${typeof(stringUm)})<br>`);
document.writeln(`numeroTrinta = ${numeroTrinta} é do tipo (${typeof(numeroTrinta)})<br>`);
document.writeln(`stringTrinta = ${stringTrinta} é do tipo (${typeof(stringTrinta)})<br>`);
document.writeln(`numeroDez = ${numeroDez} é do tipo (${typeof(numeroDez)})<br>`);
document.writeln(`stringDez = ${stringDez} é do tipo (${typeof(stringDez)})<br><br>`);


msg1 = `<p>As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes.</p><br>`;
msg2 = `<p>As variáveis numeroUm e stringUm não tem o mesmo valor.</p><br>`;
msg3 = `<p>As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo.</p><br>`;
msg4 = `<p>As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo.</p><br>`;
msg5 = `<p>As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes.</p>`;
msg6 = `<p>As variáveis numeroDez e stringDez não tem o mesmo valor.</p>`;

if (numeroUm == stringUm) {
  console.log(msg1);
  document.writeln(msg1);
} else {
  console.log(msg2);
  document.writeln(msg2);
}

if (numeroTrinta === stringTrinta) {
  console.log(msg3);
  document.writeln(msg3);
} else {
  console.log(msg4);
  document.writeln(msg4);
}

if (numeroDez == stringDez) {
  console.log(msg5);
  document.writeln(msg5);
} else {
  console.log(msg6);
  document.writeln(msg6);
}
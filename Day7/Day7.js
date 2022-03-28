function novaOperacao() {
  document.getElementById(
    "calculo"
  ).innerHTML = `<p>Qual operação você deseja fazer?</p><br>
    <button type="submit" onclick="soma()">+</button>
    <button type="submit" onclick="subtracao()">-</button><br>
    <button type="submit" onclick="multiplicacao()">x</button>
    <button type="submit" onclick="divisao()">÷</button><br><br>
    <button type="submit" onclick="sair()">Sair</button>`;
}

function soma() {
  document.getElementById(
    "calculo"
  ).innerHTML = `<p>Escolha os valores</p><br> <input type="number" id="numeroSoma1"/> <span>+</span> <input type="number" id="numeroSoma2"/> <br><br> <button class="border-gradient border-gradient-purple" type="submit" onclick="calculoSoma()">Calcular</button>`;
}

function calculoSoma() {
  var numeroSoma1 = parseFloat(document.getElementById("numeroSoma1").value);
  var numeroSoma2 = parseFloat(document.getElementById("numeroSoma2").value);

  var resultadoSoma = numeroSoma1 + numeroSoma2;

  document.getElementById(
    "calculo"
  ).innerHTML = `<h2>O resultado é ${resultadoSoma}</h2>`;
}

function subtracao() {
  document.getElementById(
    "calculo"
  ).innerHTML = `<p>Escolha os valores</p><br> <input type="number" id="numeroSubtracao1"/> <span>-</span> <input type="number" id="numeroSubtracao2"/> <br><br> <button class="border-gradient border-gradient-purple" type="submit" onclick="calculoSubtracao()">Calcular</button>`;
}

function calculoSubtracao() {
  var numeroSubtracao1 = parseFloat(
    document.getElementById("numeroSubtracao1").value
  );
  var numeroSubtracao2 = parseFloat(
    document.getElementById("numeroSubtracao2").value
  );

  var resultadoSubtracao = numeroSubtracao1 - numeroSubtracao2;

  document.getElementById(
    "calculo"
  ).innerHTML = `<h2>O resultado é ${resultadoSubtracao}</h2>`;
}

function multiplicacao() {
  document.getElementById(
    "calculo"
  ).innerHTML = `<p>Escolha os valores</p><br> <input type="number" id="numeroMultiplicacao1"/> <span>X</span> <input type="number" id="numeroMultiplicacao2"/> <br><br> <button class="border-gradient border-gradient-purple" type="submit" onclick="calculoMultiplicacao()">Calcular</button>`;
}

function calculoMultiplicacao() {
  var numeroMultiplicacao1 = parseFloat(
    document.getElementById("numeroMultiplicacao1").value
  );
  var numeroMultiplicacao2 = parseFloat(
    document.getElementById("numeroMultiplicacao2").value
  );

  var resultadoMultiplicacao = numeroMultiplicacao1 * numeroMultiplicacao2;

  document.getElementById(
    "calculo"
  ).innerHTML = `<h2>O resultado é ${resultadoMultiplicacao}</h2>`;
}

function divisao() {
  document.getElementById(
    "calculo"
  ).innerHTML = `<p>Escolha os valores</p><br> <input type="number" id="numeroDivisao1"/> <span>÷</span> <input type="number" id="numeroDivisao2"/> <br><br> <button type="submit" class="border-gradient border-gradient-purple" onclick="calculoDivisao()">Calcular</button>`;
}

function calculoDivisao() {
  var numeroDivisao1 = parseFloat(
    document.getElementById("numeroDivisao1").value
  );
  var numeroDivisao2 = parseFloat(
    document.getElementById("numeroDivisao2").value
  );

  var resultadoDivisao = numeroDivisao1 / numeroDivisao2;

  document.getElementById(
    "calculo"
  ).innerHTML = `<h2>O resultado é ${resultadoDivisao}</h2>`;
}
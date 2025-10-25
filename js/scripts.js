let nome = prompt("Digite seu nome:");
let peso = parseFloat(prompt("Digite seu peso em kg:"));
let altura = parseFloat(prompt("Digite sua altura em metros:"));

if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
  alert("Erro: Por favor, insira valores válidos para peso e altura!");
  console.error("Valores inválidos inseridos!");
} else {
  // calculando o IMC
  let imc = peso / (altura * altura);
  imc = Math.round(imc * 100) / 100;


  let classificacao = "";
  if (imc < 18.5) {
    classificacao = "Abaixo do peso";
  } else if (imc < 25) {
    classificacao = "Peso normal";
  } else if (imc < 30) {
    classificacao = "Sobrepeso";
  } else if (imc < 35) {
    classificacao = "Obesidade Grau I";
  } else if (imc < 40) {
    classificacao = "Obesidade Grau II";
  } else {
    classificacao = "Obesidade Grau III";
  }

  
  alert(`Olá, ${nome}! Seu IMC é ${imc} e você está classificado como ${classificacao}.`);

  
  console.log(`${nome} - IMC: ${imc} - Classificação: ${classificacao}`);

  // Avisos e erros adicionais
  if (imc < 18.5) {
    console.error(`${nome} está abaixo do peso!`);
  } else if (imc >= 30) {
    console.warn(`${nome} está em uma categoria de obesidade (${classificacao}).`);
  }
}
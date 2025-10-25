while (true) {
  let nome = prompt("Digite seu nome:");

  
  if (nome === null) {
    alert("Programa encerrado.");
    break;
  }

  let peso = prompt("Digite seu peso em kg:");
  if (peso === null) {
    alert("Programa encerrado.");
    break;
  }

  let altura = prompt("Digite sua altura em metros (ex: 1.75):");
  if (altura === null) {
    alert("Programa encerrado.");
    break;
  }

  
  peso = peso.replace(",", ".");
  altura = altura.replace(",", ".");

  
  peso = parseFloat(peso);
  altura = parseFloat(altura);

  
  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    alert("Erro: Por favor, insira valores válidos!\nVamos digitar os dados novamente!");
    console.error("Valores inválidos inseridos!");
    continue;
  }

  // Cálculo do IMC
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

 
  if (imc < 18.5) {
    console.error(`${nome} está abaixo do peso!`);
  } else if (imc >= 30) {
    console.warn(`${nome} está em uma categoria de obesidade (${classificacao}).`);
  }

  
  alert("Vamos digitar outros dados!");
}

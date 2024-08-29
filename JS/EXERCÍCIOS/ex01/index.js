const nome = "Pedro Henrique";
const sobrenome = "Gonçalves"
const idade = 56
const peso = 80
const altura = 1.80
let imc
let anoNascimento
const dataAtual = new Date().getFullYear();


imc = peso / (altura * altura)

console.log(`${nome} tem ${idade} anos, pesa ${peso}kg
tem ${altura} de altura e seu IMC é de ${imc.toFixed(2)}
${nome} nasceu em ${dataAtual - idade}`)
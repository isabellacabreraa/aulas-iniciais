// Calculadora simples
console.log("Atividade 01")
let primeiroNumero = 40;
let segundoNumero = 35;
let operacao = '*';
let resultado;

switch (operacao) {
case '+':
(resultado=primeiroNumero+segundoNumero)
console.log(`A soma do ${primeiroNumero} + ${segundoNumero} é igual ${resultado}`);

break;

case '-':
(resultado = primeiroNumero-segundoNumero)
console.log(`A subtração do ${primeiroNumero} - ${segundoNumero} é igual ${resultado}`);

break;

case '*':
(resultado = primeiroNumero*segundoNumero)
console.log(`A multiplicação do ${primeiroNumero} * ${segundoNumero} é igual ${resultado}`);

break;

case '/':
if (segundoNumero !== 0) {
resultado= primeiroNumero / segundoNumero
} else {
resultado= 'Erro: divisãopor zero';
}
break;
default:
resultado = "Operação inválida";
}




// Verificar se número é positivo, negativo ou zero
console.log("Atividade 02")

let numero01 = - 80;
let negativo = "- numero01";
let positivo = "+ numero01";

if (numero01 >= 1) {
console.log(`O número ${numero01} é positivo`);
}
else if (numero01 = - numero01) {
if (negativo){
console.log(`O número - ${numero01} é negativo`);
} else {
console.log(`O número é ${numero01}`);
}
}


// Verificar se pode votar
console.log("Atividade 03")

let idade = 18;

if (idade >=16) {
console.log("Você já tem idade suficiente para votar");

}

// Verificar duas condições com && e ||
console.log("Atividade 04")

let a = 16;
let b = 13;

if (a > 10 && b > 10) {
console.log("Os dois são maiores que 10");
}

if (a < 5 || b < 5) {
console.log("Pelo menos um é menor que 5");
}

// Mostrar números de 1 a 10
console.log("Atividade 05")

for (let i= 1; i<= 10; i++) {
console.log(i);
}


// Somar os números de 1 a 5
console.log("Atividade 06")

let soma= 0;

for (let i = 1; i <=5; i++) {
soma +=i;
console.log(`A soma dos números de 1 a 5 é : ${soma}`);
}

// Mostrar números pares de 0 a 20
console.log("Atividade 07")

for (let i = 0; i <= 20; i++) {
if (i % 2 === 0) {
console.log(i);
}
}

// Tabuada de 8
console.log("Atividade 08")

let numero = 8;

for (let i = 1; i <= 10; i++) {
let resultado = numero * i;
console.log(`${numero} x ${i} = ${resultado}`);
}


// Contar de 20 até 0, de 2 em 2
console.log("Atividade 09")

for (let i = 20; i >= 0; i -= 2) {
console.log(i);
}


// Contar de 1 até 5 usando while
console.log("Atividade 10")

let i = 1;

while (i <= 5) {
console.log(i);
i++;
}

// Mostrar apenas números ímpares de 1 a 15
console.log("Atividade 11")

let f = 1;

while (f<= 15) {
if (f % 2 !== 0) {
console.log(f);
}
f++;
}


// Contar até o usuário digitar um número maior que 100
console.log("Atividade 12")

let numero0 = 24;
let contagem = 0;

while (numero0 <= 100) {
console.log(`Tentativa ${contagem + 1}: ${numero0}`);
numero0+= 20; // Simulando nova entrada
contagem++;
}

console.log("Número maior que 100 digitado:", numero0);

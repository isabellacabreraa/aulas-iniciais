/*1. Verificador de Idade (10 pontos)**

Crie um programa que receba um array com as idades de 5 pessoas: `[17, 21, 16, 25, 19]`

- Verifique quantas pessoas são maiores de idade (idade >= 18)
- Verifique quantas pessoas são menores de idade (idade < 18)
- Exiba as duas contagens no console
*/


let idades = [17,21,16,25,19];
let quantidadeMaioresDeIdade = 0;
let quantidadeMenoresDeIdade = 0;

for (let i = 0; i < idades.length; i++) {
    if (idades[i] >= 18) {
        quantidadeMaioresDeIdade += 1;
    }else {
        quantidadeMenoresDeIdade += 1;
    }  
}
console.log(`${quantidadeMaioresDeIdade} pessoas são maiores de idade`);
console.log(`${quantidadeMenoresDeIdade} pessoas são menores de idade`);

// Primeiro usei o let para declarar minhas varíaveis
// A seguir usei o for para fazer uma repetição que quebra o tamanho do array
// If e else foram criados para a condição das varíaveis
// E por fim o console log para exibir uma mensagem para o "cliente"
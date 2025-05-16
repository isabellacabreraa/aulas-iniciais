/* 2. Verificador de Números (10 pontos)**

Dado o array de números: `[12, 5, 8, 21, 16, 7, 30, 45, 13, 27]`

- Conte quantos números são pares
- Conte quantos números são ímpares
- Conte quantos números são maiores que 20
- Exiba os resultados no console
*/

numeros = [12,5,8,21,16,7,30,45,13,27];
quantidadeNúmerosPares = 0;
quatidadeNúmerosImpares = 0;
numerosMaioresQue20 = 0;

for (let i = 0; i < numeros.length; i++) {
    if (numeros [i] % 2 == 0) {
        quantidadeNúmerosPares ++;
    }else {
        quatidadeNúmerosImpares ++;
    } if (numeros [i] > 20 ) {
        numerosMaioresQue20 ++;
    } 
}

console.log(`${quantidadeNúmerosPares} números são pares`);
console.log(`${quatidadeNúmerosImpares} números são impares`);
console.log(`${ numerosMaioresQue20} números são maiores que 20`);


// Primeiro usei o let para declarar minhas varíaveis
// A seguir usei o for para fazer uma repetição que quebra o tamanho do array
// If e else foram criados para a condição das varíaveis
// E por fim o console log para exibir uma mensagem para o "cliente"
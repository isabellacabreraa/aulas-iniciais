/*Média de Notas (10 pontos)**

Crie um programa que calcule a média de notas de uma turma:

- Use o array: `[8.5, 7.0, 9.5, 6.5, 8.0, 7.5, 5.5, 6.0, 9.0, 10.0]`
- Calcule e exiba a média da turma
- Mostre quantos alunos tiraram nota acima da média
- Mostre qual foi a maior e a menor nota */

let notas = [8.5, 7.0, 9.5, 6.5, 8.0, 7.5, 5.5, 6.0, 9.0, 10.0];
let media = 0;
let notasAcimaDaMedia = 0;
let maiorNota = notas [0];
let menorNota = notas [0];
let soma = 0;

for (let i = 0; i < notas.length; i++) {
    soma  += notas[i];  
    media = soma / notas.length;    

if (notas[i] > 7.75) {
        notasAcimaDaMedia ++;
    }  
    if (notas[i] > maiorNota) {
        maiorNota = notas [i];
    } 
      if (notas[i] < menorNota) {
        menorNota = notas [i]
    }
}


console.log(`A média das notas da turma é ${media}`);
console.log(`${notasAcimaDaMedia} alunos tiraram notas acima da média`);
console.log(`A maior nota foi ${maiorNota} e a menor nota foi ${menorNota}`);

// Usei a let para declarar as varíaveis 
// O for foi usado para a repetição e quebra do comprimento do array 
// O if foi usado para descobrir 
// O console log para exibir a mensagem no terminal
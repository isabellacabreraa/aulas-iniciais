let visualizacoes = [1200,850,1100,1350,950];

let dias = ["Segunda","Terça","Quarta","Quinta","Sexta"];

let maisVisu = visualizacoes [0];
let diaComMaisVisu = "";

let totalDeVisu = 0;

let storiesPopulares = 0;

mediaDiaria = 0;

for (let i = 0; i < visualizacoes.length; i++) {
    if (visualizacoes[i] > maisVisu) {
    maisVisu = visualizacoes [i];
    diaComMaisVisu = dias [i];
    }
    
totalDeVisu += visualizacoes[i];
 media = totalDeVisu / visualizacoes.length

 if (visualizacoes[i] > 1000) {
    storiesPopulares++;
 }
}
console.log(`O dia com mais visualizações é o ${diaComMaisVisu} com ${maisVisu.toFixed(2)} visualizações`);
console.log(`O total de visualizações nesse período é de: ${totalDeVisu.toFixed(2)}`);
console.log(`Stories populares: ${storiesPopulares} dias`);
console.log(`A média dois dias é ${media.toFixed(2)}`);

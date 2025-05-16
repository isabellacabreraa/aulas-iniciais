/*
Você conseguiu um estágio na equipe de marketing de uma loja de aplicativos para celular
e seu primeiro trabalho é analisar os dados dos 10 aplicativos mais baixados do mês.

Os dados são:
Nomes: ["TikTok", "Instagram", "WhatsApp", "Snapchat", "Spotify", "Netflix", "YouTube", "VSCO", "BeReal", "Uber"]
Downloads (em milhões): [2.5, 2.2, 1.8, 1.5, 1.3, 1.2, 1.1, 0.9, 0.8, 0.7]
Avaliações (de 1 a 5 estrelas): [4.7, 4.8, 4.5, 3.9, 4.6, 4.3, 4.9, 4.2, 3.8, 4.1]
Categorias: ["Social", "Social", "Comunicação", "Social", "Música", "Streaming", "Vídeo", "Foto", "Social", "Transporte"]
Seu gerente quer um relatório detalhado com as seguintes informações:

1. Mostre todos os dados em formato de tabela (nome, downloads, avaliação e categoria)
2. Encontre o aplicativo com maior número de downloads e sua categoria
3. Encontre o aplicativo com a melhor avaliação e sua categoria
4. Calcule a média de downloads dos aplicativos
5. Crie um novo array apenas com os nomes dos aplicativos que têm avaliação maior que 4.5
6. Calcule o total de downloads de todos os aplicativos da categoria "Social"
7. Verifique qual categoria tem mais aplicativo
Esta análise será apresentada na reunião de marketing na próxima semana e ajudará
a definir as estratégias de promoção da loja.
*/

const aplicativos = ["TikTok", "Instagram", "WhatsApp", "Snapchat", "Spotify", "Netflix", "YouTube", "VSCO", "BeReal", "Uber"];
const downloads = [2.5, 2.2, 1.8, 1.5, 1.3, 1.2, 1.1, 0.9, 0.8, 0.7];
const avaliacoes = [4.7, 4.8, 4.5, 3.9, 4.6, 4.3, 4.9, 4.2, 3.8, 4.1];
const categorias = ["Social", "Social", "Comunicação", "Social", "Música", "Streaming", "Vídeo", "Foto", "Social", "Transporte"];

let maiorNumeroDownloads = downloads [0];
let categoriaMaiorDownloads = categorias [0];
let aplicativoMaiorDownloads = aplicativos [0];

let maiorAvaliacao = avaliacoes [0];
let categoriaMaiorAvaliacao = categorias [0];
let aplicativosMaiorAvaliacao = aplicativos [0];

let somaTotalDownloads = 0;
let mediaDownloads = 0;

let novoArray = []
let contadorNovoArray = 0;

let totalDownloadsSocial = 0;

let categoriaMaisAplicativos = "";
let maiorContagem = 0;

for (let i = 0; i < aplicativos.length; i++) {
    if (downloads [i] > maiorNumeroDownloads) {
        maiorNumeroDownloads = downloads[i];
        categoriaMaiorDownloads = categorias [i];
        aplicativoMaiorDownloads = aplicativos [i];
    } 
  
    if (avaliacoes [i] > maiorAvaliacao) {
     maiorAvaliacao = avaliacoes[i]; 
     categoriaMaiorAvaliacao = categorias [i];  
     aplicativosMaiorAvaliacao = aplicativos [i];
    }

 somaTotalDownloads += downloads [i];

 if (avaliacoes[i] > 4.5) {
    novoArray[contadorNovoArray] = aplicativos[i];
    contadorNovoArray++;
 }

 if (categorias[i]=== "Social") {
    totalDownloadsSocial += downloads[i];
 }
}

mediaDownloads = somaTotalDownloads / downloads.length;




console.table(aplicativos);
console.table(downloads);
console.table(avaliacoes);
console.table(categorias);

console.log(`O aplicativo com maior número de downloads é: ${aplicativoMaiorDownloads} da categoria: ${categoriaMaiorDownloads}`);

console.log(`O aplicativo com a maior avaliação é: ${aplicativosMaiorAvaliacao} da categoria: ${categoriaMaiorAvaliacao}`);

console.log(`A média dos downloads dos aplicativos é: ${mediaDownloads} milhões`);

console.log(`Os aplicativos com mais que 4.5 estrelas de avaliações são ${novoArray}`);

console.log(`O total de downloads da categoria Social é: ${totalDownloadsSocial} milhões`);


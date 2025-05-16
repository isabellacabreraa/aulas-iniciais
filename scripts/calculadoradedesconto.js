/*5. Calculadora de Desconto (15 pontos)**

Uma loja está com uma promoção onde produtos com preço acima de 100 reais têm 10% de desconto:

- Use o array de preços: `[150, 50, 220, 80, 120, 30, 480, 70, 90, 190]`
- Crie um novo array onde cada preço já esteja com o desconto aplicado (se necessário)
- Calcule quanto a loja vai perder com os descontos
- Calcule o valor médio dos produtos após os descontos */

const precos = [150, 50, 220, 80, 120, 30, 480, 70, 90, 190];
let precosComDesconto = [];
let pecasPrecoAcimaDe100 = 0;
let totalDeDesconto = 0;
let soma = 0;
let media = 0;


for (let i = 0; i < precos.length; i++) {
    if (precos[i] > 100) {
        precosComDesconto [i] = precos[i] - precos * 10 / 100;
        totalDeDesconto += precos[i] * 10 / 100;
    } else {
        precosComDesconto [i] = precos [i] * 10 / 100;
    }
    soma += precosComDesconto [i];
}

media = soma / precos.length;

console.log(`total de descontos: ${totalDeDesconto}`);
console.log(`média dos preços com desconto ${media}`);
console.log(`preço final ${precosComDesconto}`);

/*4. Transformador de Temperaturas (15 pontos)**

Crie um programa que converta uma lista de temperaturas de Celsius para Fahrenheit:

- Use o array: `[0, 10, 20, 30, 40]` (temperaturas em Celsius)
- Crie um novo array com as temperaturas convertidas para Fahrenheit usando a fórmula: F = C * 9/5 + 32
- Exiba ambos os arrays lado a lado usando console.table() */

const temperaturasEmCelsius = [0, 10, 20, 30, 40];
let temperaturaEmFahrenheit =[];

for (let i = 0; i < temperaturasEmCelsius.length; i++) {
  temperaturaEmFahrenheit [i] = temperaturasEmCelsius [i] * 9/5 + 32
}

console.table (temperaturasEmCelsius);
console.table (temperaturaEmFahrenheit);

// Declarei as varíaveis usando o let e usei o const para declarar o array fixo 
// Usei o for para uma repetição do comprimento do array, depois multipliquei os graus celsius por 9/5 e somei 32 
// Por fim usei o console table para exibir 